# Bookshelf API

Bookshelf API is a RESTful API for managing a bookshelf, allowing users to create, read, update, and delete books.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Create a Book**: Add a new book to the bookshelf.
- **Read Books**: Get details of all books or a specific book by ID.
- **Update a Book**: Modify details of an existing book.
- **Delete a Book**: Remove a book from the bookshelf.

## Technologies

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Framework for building the REST API.
- **MySQL**: Database for storing book information.
- **dotenv**: Environment variable management.
- **nanoid**: Generate unique IDs for books.
- **nodemon**: Automatic server restart for development.

## Project Structure

```plaintext
bookshelf-api/
├── src/
│   ├── controller/
│   │   └── books.js           # Controller for handling book-related operations
│   ├── middleware/
│   │   └── logs.js            # Middleware for logging requests
│   ├── models/
│   │   └── books.js           # Model for interacting with the books database
│   ├── routes/
│   │   └── books.js           # Route definitions for book endpoints
│   ├── database.js            # Database connection using MySQL
│   └── index.js               # Entry point of the application
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Getting Started
**Prerequisites**
- **Node.js** (v16 or higher)
- **MySQL** (set up with required credentials)

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/username/bookshelf-api.git
Install dependencies:

bash
Copy code
cd bookshelf-api
npm install
Set up your environment variables in the .env file.

Start the server:

bash
Copy code
npm run start-dev  # For development (with nodemon)
npm run start      # For production
Environment Variables
Create a .env file in the root directory with the following values:

plaintext
Copy code
PORT=3000
DB_HOST=your_database_host
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
API Endpoints
Book Endpoints
GET /books: Retrieve all books.
POST /books: Add a new book.
GET /books/
: Retrieve a book by its ID.
PUT /books/
: Update a book by its ID.
DELETE /books/
: Delete a book by its ID.
Sample JSON Requests
Add a Book:

json
Copy code
{
  "name": "Book Title",
  "pageCount": 300,
  "readPage": 50
}
Update a Book:

json
Copy code
{
  "name": "Updated Book Title",
  "pageCount": 350,
  "readPage": 200
}
License
This project is licensed under the MIT License - see the LICENSE file for details.
