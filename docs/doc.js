/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new post with the provided title and content. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the post
 *                 example: My first post
 *               content:
 *                 type: string
 *                 description: Content of the post
 *                 example: This is the content of my post
 *     responses:
 *       201:
 *         description: Post created successfully
 *       500:
 *         description: Error creating post
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get a list of posts
 *     description: Retrieves a paginated list of posts.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of posts per page
 *     responses:
 *       200:
 *         description: List of posts retrieved successfully
 *       500:
 *         description: Error retrieving posts
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a single post by ID
 *     description: Retrieves a single post based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Error retrieving post
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post by ID
 *     description: Updates the title and content of a post. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title of the post
 *                 example: Updated title
 *               content:
 *                 type: string
 *                 description: Updated content of the post
 *                 example: Updated content
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Error updating post
 */

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     description: Deletes a post with the specified ID. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       204:
 *         description: Post deleted successfully
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Error deleting post
 */

/**
 * @swagger
 * /posts/{id}/comments:
 *   post:
 *     summary: Add a comment to a post
 *     description: Adds a comment to a specific post. Requires authentication.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: Content of the comment
 *                 example: This is a comment
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       500:
 *         description: Error adding comment
 */

/**
 * @swagger
 * /posts/{id}/comments:
 *   get:
 *     summary: Get comments for a post
 *     description: Retrieves all comments associated with a specific post.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: List of comments retrieved successfully
 *       500:
 *         description: Error retrieving comments
 */