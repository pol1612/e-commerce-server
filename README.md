# Project E-Commerce Api

## Overview
This project is an Express.js application for managing products and users in an e-commerce system. It provides endpoints for creating, retrieving, updating, and deleting products, as well as user authentication and registration.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables:
  - `PORT`: Port number for the server to listen on.
  - `MONGODB_URI`: MongoDB connection URI.
  - `DB_NAME`: Name of the MongoDB database.
  - `SECRET_KEY`: Secret key for JWT token generation.
4. Start the server using `npm start`.

## Directory Structure
- `index.js`: Entry point of the application.
- `controllers/`: Contains controllers for handling product and user operations.
  - `product.controller.js`: Controller functions for product operations.
  - `user.controller.js`: Controller functions for user operations.
- `database/`: Contains files related to database setup.
  - `db.js`: Establishes connection to MongoDB.
  - `models/`: Contains Mongoose models for product and user schemas.
    - `product.js`: Defines the schema for products.
    - `user.js`: Defines the schema for users.
- `middlewares/`: Contains custom middleware functions.
  - `isRequestAuthenticated.js`: Middleware for authenticating requests using JWT tokens.
- `routes/`: Contains route definitions.
  - `authentication.routes.js`: Routes for user authentication and registration.
  - `product.routes.js`: Routes for product CRUD operations.
  - `user.routes.js`: Routes for user-related operations.
- `shared/`: Contains utility functions.
  - `http.utils.js`: Utility function for validating request body fields.

## Usage

### Example Requests to the API


- **Get User By ID**
  - **Route:** `POST /api/v1/authentication/login`
  - **Authentication:** No authentication required



- **Register User**
  - **Route:** `POST /api/v1/authentication/register`
  - **Authentication:** No authentication required
  - **Body:**
    ```json
    {
      "username": "example_username",
      "email": "example@example.com",
      "password": "example_password",
      "isAdmin": false
    }
    ```

- **Login User**
  - **Route:** `POST /api/v1/authentication/login`
  - **Authentication:** No authentication required
  - **Body:**
    ```json
    {
      "email": "example@example.com",
      "password": "example_password"
    }
    ```

- **Create Product**
  - **Route:** `POST /api/v1/products`
  - **Authentication:** Bearer Token required
  - **Body:**
    ```json
    {
      "title": "example_product",
      "description": "example_description",
      "price": 20.99,
      "discountPercentage": 10,
      "rating": 4.5,
      "stock": 100,
      "brand": "example_brand",
      "category": "example_category",
      "thumbnail": "example_thumbnail",
      "images": "example_images"
    }
    ```

- **Get All Products**
  - **Route:** `GET /api/v1/products`
  - **Authentication:** Bearer Token required

- **Get Product by ID**
  - **Route:** `GET /api/v1/products/:id`
  - **Authentication:** Bearer Token required

- **Update Product**
  - **Route:** `PUT /api/v1/products/:id`
  - **Authentication:** Bearer Token required
  - **Body:**
    ```json
    {
      "title": "updated_example_product",
      "description": "updated_example_description",
      "price": 25.99,
      "discountPercentage": 15,
      "rating": 4.7,
      "stock": 150,
      "brand": "updated_example_brand",
      "category": "updated_example_category",
      "thumbnail": "updated_example_thumbnail",
      "images": "updated_example_images"
    }
    ```

- **Delete Product**
  - **Route:** `DELETE /api/v1/products/:id`
  - **Authentication:** Bearer Token required

## Technologies Used
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- dotenv
- cors

## License
This project is licensed under the Apache License Version 2.0, January 2004.
