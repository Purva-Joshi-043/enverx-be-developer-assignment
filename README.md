# Blog API

This is a simple RESTful API for a blog application built with Node.js, Express.js, and MongoDB.

## Prerequisites

Before running this project, make sure you have the following prerequisites installed on your machine:

- Node.js (version >= 12)
- MongoDB (installed and running)

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/Purva-Joshi-043/enverx-be-developer-assignment
   ```

2. Navigate to the project directory:

   ```shell
   cd blog-api
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Build the project:

   ```shell
   npm run build
   ```

   This will transpile the TypeScript code into JavaScript.

5. Set up environment variables:

   - Create a new file named `.env` in the root directory.
   - Add the necessary environment variables to the `.env` file. For example:

     ```plaintext
     PORT=3000
     MONGODB_URL=mongodb://localhost:27017/blog
     ```

   Update the `MONGODB_URL` value if your MongoDB configuration differs.

6. Configure the database:

   - Make sure MongoDB is installed and running.
   - Update the MongoDB connection URL in the `src/db.ts` file if necessary.

7. Start the server:

   ```shell
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available in the API:

- `GET /posts`: Get all blog posts (supports sorting and filtering).
- `GET /posts/:id`: Get a specific blog post by ID.
- `POST /posts`: Create a new blog post.
- `PUT /posts/:id`: Update an existing blog post.
- `DELETE /posts/:id`: Delete a blog post.

### Request and Response Examples

- **GET /posts**

  - Request: `GET http://localhost:3000/posts`

  - Response:

    ```json
    [
      {
        "id": "1",
        "title": "First Blog Post",
        "content": "This is the content of the first blog post."
      },
      {
        "id": "2",
        "title": "Second Blog Post",
        "content": "This is the content of the second blog post."
      }
    ]
    ```

- **POST /posts**

  - Request: `POST http://localhost:3000/posts`

    ```json
    {
      "title": "New Blog Post",
      "content": "This is the content of the new blog post."
    }
    ```

  - Response:

    ```json
    {
      "id": "3",
      "title": "New Blog Post",
      "content": "This is the content of the new blog post."
    }
    ```

For detailed API documentation, please refer to the API documentation file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
