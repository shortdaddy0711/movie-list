// Import express
const express = require('express');
const path    = require('path');

// import controllers
const movies  = require('../controllers/movies.js');


// import Middleware
const parser = require('body-parser');

// Create our app
const app = express();

//  Create a port variable
const PORT = 3000;


// 1. Decide the diretory
const public = path.join(__dirname, '..', 'client', 'dist');

//  2. Implement middleware with use method and run express static
app.use(express.static(public));
app.use(parser.json());
app.listen(PORT);

//  3. Implement methods to handling request
app.get ('/movies', movies.get);
app.post ('/movie', movies.post)