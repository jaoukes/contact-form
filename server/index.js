'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'

// Route to create an entry when the user submits their form
router.post('/create', async function (req, res, next) {
  const formErrors = {};
  if (!req.body.name) {
    formErrors.name = 'Required';
  }
  if (!req.body.region) {
    formErrors.region = 'Required';
  }
};
// Route to create or register a user
router.get('/create-user', function (req, res) {
  res.render('create-user', {
    formValues: {},
    formErrors: {},
  });
});
// Route to log a registered user in to create a session
router.post('/create-user', async function (req, res, next) {
  const formErrors = {};
  if (!req.body.name) {
    formErrors.name = 'Required';
  }
  }
// Route to get a listing of all submissions


// Default Error Handler
// This is always last!
app.use(function (error, req, res, next) {
  console.error(error); // this is here to see errors for debugging purposes
  res.sendStatus(500); // Send 500 status code - "Internal Server Error"
});

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
