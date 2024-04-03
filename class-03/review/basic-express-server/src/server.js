// server.js
const express = require('express');
const loggerMiddleware = require('./middleware/logger');
const validatorMiddleware = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404'); // Import notFoundHandler
const errorHandler = require('./error-handlers/500'); // Import errorHandler

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(loggerMiddleware);

app.get('/person', validatorMiddleware, (req, res) => {
  // Extracting the name from the query string
  const { name } = req.query;
  if (!name) {
    // If name is not provided in the query string, send a 500 error
    return res.status(500).json({ error: 'Name not provided' });
  }

  // If name is provided, send a JSON response with the provided name
  res.json({ name });
});

app.use(notFoundHandler); // Use notFoundHandler for 404 errors
app.use(errorHandler); // Use errorHandler for 500 errors

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
  app: app
};