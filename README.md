# NodeJs_User_CRUD
This is basics for creating apis using express library in nodeJs. This repo performs CRUD operations over a live mongoDB which was connected using Moongose in NodeJs

# Express API for MongoDB CRUD Operations

This repository contains a basic example of creating APIs using the Express library in Node.js. The API is designed to perform CRUD (Create, Read, Update, Delete) operations on a live MongoDB database, which is connected using Mongoose in Node.js.

## Prerequisites

Before you start, make sure you have the following prerequisites installed on your system:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aftab23822/NodeJs_User_CRUD.git

2. Navigate to the project directory:
   ```bash
   cd NodeJs_User_CRUD

3. Install the required dependencies:
   ```bash
   npm install
   
## Configuration 

Before running the application, you need to configure the MongoDB connection. 
Edit the `connection.js` file in the root directory and update the MongoDB URL according to your database configuration.
Here is an example:
    
    
    await mongoose.connect(YOUR_MONGO_DB_CONNECTION_STRING)

## Usage

To start the Express API server, run the following command:
   
   
   npm start

## API Endpoints

API Endpoints
