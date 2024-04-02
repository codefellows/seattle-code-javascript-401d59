'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./errors/404');
const serverError = require('./errors/500');
const validateToppings = require('./middleware/validateToppings');

const app = express();
app.use(cors());

app.get('/sandwich/:topping', validateToppings, (req, res, next) => {
  console.log('MESSAGE FROM VALIDATOR', req.banana);
  res.send(`Here is a sandwich with ${req.params.topping}`);
});

app.use(serverError);
app.use(notFound);

module.exports = app;