var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const supabase = require('./routes/supabaseClient');
 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var supabaseRouter = require('./routes/supabaseClient');

var app = express();
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Tech Stak',
        version: '1.0.0',
        description: 'api documentation',
      },
    },
    apis: ['./app.js','./docs/doc.js'], // archivos de ruta para Swagger
  };
  
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/data', async (req, res) => {
    const { data, error } = await supabase.from('nombre_de_tu_tabla').select('*');
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);




app.use('/api', supabaseRouter);




const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);});

 
module.exports = app;
