'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'


let util = require('util');
let fs = require('fs');
let path = require('path');

// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let dbPath = path.resolve('src/db.json');


// Route to create an entry when the user submits their form
// TODO: Be more specific with your path, what IS is creating, also don't use verbs in paths, as paths should be nouns
app.post('/user/form', function (req, res, next) {
  response.send("User Form Submitted");
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

// Route to get a listing of all submissions
app.get('/user/results', function (req, res, next){
  response.send("All User Submissions");
  console.log("All User Submissions");
});

// Route to create or register a user
app.post('user/create', function (req, res, next){
  response.send("User Registered");
  console.log("User Registered")
});

// app.get('/create-user', function (req, res) {
//   res.render('create-user', {
//     formValues: {},
//     formErrors: {},
//   });
// });

// Route to log a registered user in to create a session
app.post('/user/login', function (req, res, next){
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
  res.sendStatus(500); // Send 500 status code - "Internal Server Error"
});

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
