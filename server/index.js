'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'




// Submit form
app.post('/contact_us/form', function (request, response, next) {
  response.send('User Form Submitted');
});


// Register a User
app.post('/user/register', async function (request, response, next) {
  response.send("User Registered");
  console.log("User Registered")
});


// Log in a user (create session)
app.post('/user/login', async function (request, response, next){
  response.send("User Session");
  console.log("User Session");
});


// Get a list of all submissions
app.get('/contact_us/results', async function (request, response, next){
  response.send();
  console.log("All User Submissions");
});



// Default Error Handler
app.use(function (error, request, response, next) {
  console.error(error);
  response.sendStatus(500); // "Internal Server Error"
});

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
