'use strict';

require('dotenv').config();
const { start } = require('./src/server.js');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

sequelize.sync()
.then(() => {
  start(PORT);
})
.catch(e => {
  console.error('DATABASE ERROR', e);
});
