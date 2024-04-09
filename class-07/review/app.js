'use strict';

require('dotenv').config();

// 3rd Party Resources
const express = require('express');
const AuthRouter = require('./src/auth/router');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));
app.use(AuthRouter);

// make sure our tables are created, start up the HTTP server.
// sequelize.sync()
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   }).catch(e => {
//     console.error('Could not start server', e.message);
//   });
module.exports = {
  app
}