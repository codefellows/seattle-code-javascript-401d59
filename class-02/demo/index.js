'use strict';

require('dotenv').config();
// Start the server
const app = require('./src/server_start.js');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('SANDWHICH SERVER RUNNING!');
});