require('dotenv').config();
const { start } = require('./src/server');

const PORT = process.env.PORT || 3000;

start(PORT);
