'use strict';

let express = require('express');

let app = express();
let port = 3000;

// Middleware
app.use(express.json()); // Allows to read JSON sent in 'req.body'

// Routes go here
router.post('/' function (req, res) {
  console.log(req.body.b);
  res.send('Hello Wolrd!');
});

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
