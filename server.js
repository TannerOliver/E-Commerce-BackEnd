const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// GIVEN a functional Express.js API
//  X WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
//    X THEN I am able to connect to a database using Sequelize
//  WHEN I enter schema and seed commands
//    THEN a development database is created and is seeded with test data
//  WHEN I enter the command to invoke the application
//    THEN my server is started and the Sequelize models are synced to the MySQL database
//  WHEN I open API GET routes in Insomnia Core for categories, products, or tags
//    THEN the data for each of these routes is displayed in a formatted JSON
//  WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
//    THEN I am able to successfully create, update, and delete data in my database

// You’ll need to use the MySQL2 and Sequelize packages to connect your Express.js
// API to a MySQL database and the dotenv package to use environment variables to 
//store sensitive data. Use the schema.sql file in the db folder to create your
// database with MySQL shell commands. Use environment variables to store sensitive
// data like your MySQL username, password, and database name.

// Your database should contain the following four models, including the requirements listed for each model:

// Category
  // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.

  // category_name
    // String.
    // Doesn't allow null values.

// Product
  // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.

  // product_name
    // String.
    // Doesn't allow null values.

  // price
    // Decimal.
    // Doesn't allow null values.
    // Validates that the value is a decimal.

  // stock
    // Integer.
    // Doesn't allow null values.
    // Set a default value of 10.
    // Validates that the value is numeric.

  // category_id
    // Integer.
    // References the Category model's id.

// Tag
  // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.

  // tag_name
    // String.
// ProductTag

  // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.

  // product_id
    // Integer.
    // References the Product model's id.

  // tag_id
    // Integer.
    // References the Tag model's id.