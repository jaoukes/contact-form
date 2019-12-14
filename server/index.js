'use strict';

let express = require('express');

let app = express();
let port = 3000;

app.use(express.json());






function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
