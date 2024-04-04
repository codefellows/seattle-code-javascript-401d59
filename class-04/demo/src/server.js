'use strict';

const express = require('express');
const cors = require('cors');
const customerRouter = require('./routes/customers');

const app = express();
// apply global application middleware
app.use(cors());
app.use(express.json());

app.use(customerRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('API Server running on ::', port);
    })
  },
  app,
}
