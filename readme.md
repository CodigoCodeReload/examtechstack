
# Express Blog API

This is an Express.js API for managing blog posts and comments. It supports CRUD operations for posts and comments, with Swagger documentation to make it easy to reference API endpoints. Authentication is required for certain actions, such as creating, updating, and deleting posts and comments.

## Features

- **CRUD Operations**: Full CRUD (Create, Read, Update, Delete) support for posts and comments.
- **Authentication**: Required for creating, updating, and deleting posts and comments.
- **Pagination**: Allows pagination for retrieving posts.
- **API Documentation**: Uses Swagger for detailed API documentation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-blog-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd express-blog-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables (e.g., JWT secret, database URL) in a `.env` file.

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Access the API documentation:
   Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser to view Swagger API documentation.

## API Documentation

### Authentication
- This API uses Bearer token authentication for protected routes. Authentication is required for creating, updating, and deleting posts and comments.

### Endpoints

#### **Create a New Post**
- **URL**: `/posts`
- **Method**: `POST`
- **Security**: Requires authentication
- **Request Body**:
  ```json
  {
    "title": "My first post",
    "content": "This is the content of my post"
  }
  ```
- **Responses**:
  - `201`: Post created successfully
  - `500`: Error creating post

#### **Get a List of Posts**
- **URL**: `/posts`
- **Method**: `GET`
- **Parameters**:
  - `page` (integer, default `1`): Page number
  - `limit` (integer, default `10`): Number of posts per page
- **Responses**:
  - `200`: List of posts retrieved successfully
  - `500`: Error retrieving posts

#### **Get a Single Post by ID**
- **URL**: `/posts/{id}`
- **Method**: `GET`
- **Parameters**:
  - `id` (integer, required): ID of the post
- **Responses**:
  - `200`: Post retrieved successfully
  - `404`: Post not found
  - `500`: Error retrieving post

#### **Update a Post by ID**
- **URL**: `/posts/{id}`
- **Method**: `PUT`
- **Security**: Requires authentication
- **Parameters**:
  - `id` (integer, required): ID of the post
- **Request Body**:
  ```json
  {
    "title": "Updated title",
    "content": "Updated content"
  }
  ```
- **Responses**:
  - `200`: Post updated successfully
  - `403`: Forbidden
  - `500`: Error updating post

#### **Delete a Post by ID**
- **URL**: `/posts/{id}`
- **Method**: `DELETE`
- **Security**: Requires authentication
- **Parameters**:
  - `id` (integer, required): ID of the post
- **Responses**:
  - `204`: Post deleted successfully
  - `403`: Forbidden
  - `500`: Error deleting post

#### **Add a Comment to a Post**
- **URL**: `/posts/{id}/comments`
- **Method**: `POST`
- **Security**: Requires authentication
- **Parameters**:
  - `id` (integer, required): ID of the post
- **Request Body**:
  ```json
  {
    "content": "This is a comment"
  }
  ```
- **Responses**:
  - `201`: Comment added successfully
  - `500`: Error adding comment

#### **Get Comments for a Post**
- **URL**: `/posts/{id}/comments`
- **Method**: `GET`
- **Parameters**:
  - `id` (integer, required): ID of the post
- **Responses**:
  - `200`: List of comments retrieved successfully
  - `500`: Error retrieving comments

## Swagger Documentation

This API is documented with Swagger. You can view the complete API documentation by visiting [http://localhost:3000/api-docs](http://localhost:3000/api-docs) after starting the server.

## License

This project is licensed under the MIT License.
