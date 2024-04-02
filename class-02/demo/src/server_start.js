'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use((req, res, next) => {
  console.log('You have made it to my restaurant!');
  next(); // middleware function must call next if they do not send a response themselves.
});

// middleware for checking toppings per request
function validateToppings(req, res, next) {
  let toppings = ['lettuce', 'bacon', 'cheese', 'tomatoes'];
  if (!toppings.includes(req.params.topping)) {
    // passes an error to our error handler
    next('Invalid topping for a sandwich');
  } else {
    // passes the request object down to the next middleware
    next();
  }
}

app.get('/sandwich/:topping', validateToppings, (req, res, next) => {
  console.log('MESSAGE FROM VALIDATOR', req.banana);
  res.send(`Here is a sandwich with ${req.params.topping}`);
});

app.use((err, req, res, next) => {
  console.log('SANDWICH SERVER ERROR:', err);
  res.status(500).send('Not a good sandwich');
});

app.use((req, res, next) => {
  res.status(404).send('Invalid sandwich route');
});

module.exports = app;
