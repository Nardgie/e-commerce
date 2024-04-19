# E-Commerce Backend

A backend for an e-commerce site

## Description

This e-commerce backend application is designed to manage a store's products, categories, and tags via a robust API. Built with Express.js and Sequelize, this application interfaces with a MySQL database to perform CRUD operations on product data. It's intended for use with API testing tools like Insomnia to manage the database effectively.


## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Seeding the Database](#seeding-the-database)
- [Testing with Insomnia](#testing-with-insomnia)
- [Credits](#credits)
- [License](#license)


## Installation

To install the necessary components:

1. **Clone the repository:**

[Link to Repository](https://github.com/Nardgie/e-commerce)

2. **Install Dependencies**

`npm i`


## Setting Up

1. **Set up MySQL:**

- Ensure MySQL is installed on your machine.
- Use MySQL shell to create your database with the `schema.sql` file.

2. **Environment Variables:**

- Create a `.env` file in the root directory.
- Populate `.env` with your database name, MySQL username, and MySQL password as follows:
  ```
  DB_NAME='ecommerce_db'
  DB_USER='yourusername'
  DB_PASSWORD='yourpassword'
  ```


## Usage

To start the server, run:

`node server.js`

This will synchronize the Sequelize models to the MySQL database and start the Express server.


## API Routes

### Categories

- **GET `/api/categories`**: GET all categories and their associated products.
- **GET `/api/categories/:id`**: GET a single category by ID.
- **POST `/api/categories`**: Create a new category.
- **PUT `/api/categories/:id`**: Update a category by ID.
- **DELETE `/api/categories/:id`**: Delete a category by ID.

### Products

- **GET `/api/products`**: GET all products and their associated categories and tags.
- **GET `/api/products/:id`**: GET a single product by ID.

### Tags

- **GET `/api/tags`**: GET all tags and their associated products.
- **GET `/api/tags/:id`**: GET a single tag by ID.


## Seeding the Database

To seed the database with initial data:

`npm run seed`


This will populate the database with sample categories, products, and tags.


## Testing with Insomnia

Use Insomnia to test the API routes:

### Video Demo 

[Video Demo Using Insomnia](https://watch.screencastify.com/v/cjfO38400q1Ojn2EOeYf)


## Credits

Developed by Nardgelen Jean Francois. 
Built using Express.js, Sequelize, MySQL2, and dotenv.


## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


