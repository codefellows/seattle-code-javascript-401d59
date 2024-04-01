// what are entry points for, importing your programs "module" and invoking them.

const addition = require('./lib/addition.js'); // require -> built in Node function. Loads dependencies from other modules / files.

console.log("THERE IS MY BANANA", addition(2, 3));


// Express!!!!
require('dotenv').config();
const express = require('express');

const app = express();

// add server functionality
app.get('/addition', (request, response) => {
  try { 
    let { number1, number2 } = request.query;
    let sum = addition(parseInt(number1), parseInt(number2));
    response.status(200).json({value: sum});
  } catch(e) {
    response.status(400).send('I need some numbers :(');
  }
});

// app.listen(PORT, () => {
//   console.log('App is listening');
// });

module.exports = app;
