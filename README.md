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

### Example Authentication Requests to the API


- **Get User By ID**
  - **Route:** `GET /api/v1/authentication/:id`
  - **Authentication:** Bearer Token required
  - **OK Response:** 
    ```json
    {
      "_id":"66463b4b22ff1349abc37cd1",
      "username":"username",
      "email":"example@example.com",
      "password":"$2b$asdsaadN5qDOeyssdefOfqWAA9wZLpxaqM8AJ1CoEzFfwjLJt2y",
      "isAdmin":true,
      "__v":0
    }
    ```


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
  - **OK Response:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaERiOiI2NjQ2M2Iasdadasdad5YWJjMzdjZDEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTU4OTM1MDR9.--mIMeBDn6DW7bSOm_yN9jDHLjpl5EIwt3LdcWrokNE",
      "userId": "66463b4b62ff1349abc37cd1",
      "isAdmin": true
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
  - **OK Response:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaERiOiI2NjQ2M2Iasdadasdad5YWJjMzdjZDEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MTU4OTM1MDR9.--mIMeBDn6DW7bSOm_yN9jDHLjpl5EIwt3LdcWrokNE",
      "userId": "66463b4b62ff1349abc37cd1",
      "isAdmin": true
    }
    ```

### Example Products Requests to the API


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
  - **OK Response:** 
    ```json
    {
      "66423a84964b3a07fe38c11b"
    }
    ```

- **Get All Products**
  - **Route:** `GET /api/v1/products`
  - **Authentication:** No authentication required
  - **OK Response:**
    ```json
    [
      {
        "_id":"66423cff6f807b464652f8da",
        "id":2,
        "title":"iPhone X",
        "description":"A very useful mobile phone ",
        "price":899,"discountPercentage":17.94,
        "rating":4.44,"stock":34,"brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images":"https://cdn.dummyjson.com/product-images/2/1.jpg"
      },
      {
        "_id":"66423cff6f234b464652f8da",
        "id":2,
        "title":"iPhone X",
        "description":"A very useful mobile phone ",
        "price":899,"discountPercentage":17.94,
        "rating":4.44,"stock":34,"brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images":"https://cdn.dummyjson.com/product-images/2/1.jpg"
      },
      ...  
    ]
    ```

- **Get Product by ID**
  - **Route:** `GET /api/v1/products/:id`
  - **Authentication:** Bearer Token required
  - **OK Response:**
    ```json
    {
      "_id":"66423cff6f234b464652f8da",
      "id":2,
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
  - **OK Response:**
    ```json
    {
      "_id":"66423cff6f807b464652f8da",
      "id":2,
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
  - **OK Response:**
    ```json
    {
      "_id":"66423cff6f807b464652f8da",
      "id":2,
      "title": "deleted_example_product",
      "description": "deleted_example_description",
      "price": 25.99,
      "discountPercentage": 15,
      "rating": 4.7,
      "stock": 150,
      "brand": "deleted_example_brand",
      "category": "deleted_example_category",
      "thumbnail": "deleted_example_thumbnail",
      "images": "deleted_example_images"
    }
    ```

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
