# API Backend with Express, MongoDB, and Authentication

This is a RESTful API backend built using Express.js, MongoDB, and authentication for managing products and users.

## Features

- CRUD operations for products
- User authentication (signup, login)
- Token-based authentication using JSON Web Tokens (JWT)
- MongoDB database integration

## Prerequisites

Before running this project locally, make sure you have the following installed:

- Node.js and npm: [Node.js Official Website](https://nodejs.org/)
- MongoDB: [MongoDB Official Website](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

### Products

- **GET /api/products**: Get all products
- **GET /api/products/:id**: Get a single product by ID
- **POST /api/products**: Create a new product
- **PUT /api/products/:id**: Update a product by ID
- **DELETE /api/products/:id**: Delete a product by ID

### Users

- **POST /api/signup**: Register a new user
- **POST /api/login**: Login user and generate JWT token

## Authentication

This API uses token-based authentication using JSON Web Tokens (JWT). To authenticate requests, include the JWT token in the `Authorization` header of the request:

```
Authorization: Bearer your-jwt-token
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
