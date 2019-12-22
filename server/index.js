'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'

// Submit form
app.post('/contact_us/form', function (request, response, next) {
  console.log("User Form Submitted");
});

// Get a list of all submissions
app.get('/contact_us/results', function (request, response, next){
  console.log("All User Submissions");
});

// Register a user
app.post('/user/register', function (request, response, next) {
  console.log("User Registered")
});

// Log in a user (create session)
app.post('/user/login', function (request, response, next){
  console.log("User Session");
});


// Default Error Handler
// This is always last!
app.use(function (error, req, res, next) {
  console.error(error); // this is here to see errors for debugging purposes
  res.sendStatus(500).send('Something broke!'); // Send 500 status code - "Internal Server Error"
});

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
