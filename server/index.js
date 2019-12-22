'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'

//let util = require('util');
//let fs = require('fs');
//let path = require('path');

// Create versions of `fs` methods we'll be using to return promises
//let readFile = util.promisify(fs.readFile);
//let writeFile = util.promisify(fs.writeFile);

// DB Path
// let dbPath = path.resolve('server/db.json');


// Submit form
// TODO: Be more specific with your path, what IS is creating, also don't use verbs in paths, as paths should be nouns
app.post('/contact_us/form', function (request, response, next) {
  response.send();
  console.log("User Form Submitted");
// I'd worry about validation later, the first thing you should after this route and the next route "works"
//    const formErrors = {};
//    if (!req.body.name) {
//      formErrors.name = 'Required';
//    }
//    if (!req.body.region) {
//      formErrors.region = 'Required';
//    }
});

// Get a list of all submissions
app.get('/contact_us/results', async function (req, res, next){
  response.send();
  console.log("All User Submissions");
});

// Register a user
app.post('/user/register', async function (request, response, next) {
  response.send("User Registered");
  console.log("User Registered")
});

// app.get('/create-user', function (req, res) {
//   res.render('create-user', {
//     formValues: {},
//     formErrors: {},
//   });
// });

// Log in a user (create session)
app.post('/user/login', async function (req, res, next){
  response.send("User Session");
  console.log("User Session");
});
// app.post('/create-user', async function (req, res, next) {
//   const formErrors = {};
//   if (!req.body.name) {
//     formErrors.name = 'Required';
//   }
// });


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
