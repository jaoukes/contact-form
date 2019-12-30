'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'


let util = require('util');
let fs = require('fs');
let path = require('path');

// `fs` methods to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// DB Path
let dbPath = path.resolve('server/db.json');

// Read the content of db.json
async function read() {
  let fileContents = await readFile(dbPath);
  let allSubmissions = JSON.parse(fileContents);
  return allSubmissions;
}

// Add submission to db, with read and write combo
async function addSubmission(newSubmission) {
  let allSubmissions = await read ();
  allSubmissions.push(newSubmission);
  await writeFile(allSubmissions);
};

// Middleware for form
function validateSubmissionMiddleware (request, response, next) {
  let form = request.body;
  if (!form.name) {
    response.status(400).send('"name" is a required field');
  } else if (!form.email) {
    response.status(400).send('"email" is a required field');
  } else if (!form.message) {
    response.status(400).send('"message" is a required field');
  } else {
    next();
  }
};

// Routes
// Submit form
app.post('/contact_us/form', async function (request, response, next) {
  await addSubmission(req.body);
  response.send();
  next();
});


// Register a User
app.post('/user/register', async function (request, response, next) {
  response.send('User Registered');
});


// Log in a user (create session)
app.post('/user/login', async function (request, response, next){
  response.send('User Session');
});


// Get a list of all submissions
app.get('/contact_us/results', async function () {
  let submissions = await db.submissions;
  let allSubmissions = JSON.parse(fileContents);
  console.log(submissions);
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
