// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');
const express = require('express');
const router = express.Router();

const supabaseUrl = 'https://nzavlofjwoqavaluiwks.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56YXZsb2Zqd29xYXZhbHVpd2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MTAzNzAsImV4cCI6MjA0NTQ4NjM3MH0.bHqhxanVThSE004Te1bBib0kPW8jG-TTbf1bswdl0A4';

const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware para autenticación (opcional)
// const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ error: 'Unauthorized' });

//   // Usa getUser() en lugar de api.getUser
//   const { data: { user }, error } = await supabase.auth.getUser(token);

//   if (error || !user) return res.status(401).json({ error: 'Invalid token' });

//   req.user = user;
//   next();
// };
//create swagger documentation

 

router.post('/posts', async (req, res) => {
  const { title, content, user } = req.body;
  console.log(req.body);

  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, content, user_id: user }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({"message":"Post created successfully"});
});

router.get('/posts', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .range(start, end)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
});

router.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();

  if (error) return res.status(404).json({ error: 'Post not found' });
  res.status(200).json(data);
});

router.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { user } = req;

  const { data: post } = await supabase.from('posts').select('*').eq('id', id).single();
  if (post.user_id !== user.id) return res.status(403).json({ error: 'Forbidden' });

  const { data, error } = await supabase
    .from('posts')
    .update({ title, content })
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json("Post updated successfully");
});

router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const { data: post } = await supabase.from('posts').select('*').eq('id', id).single();
  if (post.user_id !== user.id) return res.status(403).json({ error: 'Forbidden' });

  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
});

router.post('/posts/:id/comments', async (req, res) => {
  // path param get id
  const id  = req.params.id;
  const { content,id_user } = req.body;
console.log(id);
  const { data, error } = await supabase
    .from('comments')
    .insert([{ post_id: id, user_id: id_user, content }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({"message":"Comment created successfully"});
});

router.get('/posts/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
});

module.exports = router;