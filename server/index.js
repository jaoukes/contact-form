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

async function read() {
  let fileContents = await readFile(dbPath);
  let allCars = JSON.parse(fileContents); // Parse the buffer of JSON into a JS array
  return allCars;
}

async function write(dbItems) {
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}

async function addCar(newCar) {
  // Step One: Read the contents of the database
  let allCars = await read();
  // Step Two: Add the new car to what we get out of the database
  allCars.push(newCar);
  // Step Three: Write to our database all the cars plus the new one added (the value from step #2)
  await write(allCars);
}

// Routes
// Submit form
app.post('/contact_us/form/:id', async function (request, response, next) {
  await db.addUser(req.body);
  response.send();
  next();
});


// Register a User
app.post('/user/register/:id', async function (request, response, next) {
  response.send('User Registered');
});


// Log in a user (create session)
app.post('/user/login/:id', async function (request, response, next){
  response.send('User Session');
});


// Get a list of all submissions
app.get('/contact_us/results/:id', async function (request, response, next){
  let submissions = await db.submissions();
  console.log('Submissions:');
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
