'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const basic = require('./middleware/basic');
const bearer = require('./middleware/bearer');
const authorize = require('./middleware/authorize');
const { User } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());


// step 1, user signs up to be a User with a given role
app.post('/signup', async (request, response) => {
  let user = await User.create(request.body);

  response.status(201).json(user);
});
 
app.post('/signin', basic, (request, response) => {
  response.status(200).send(request.user);
});

app.get('/articles', bearer, authorize('read'), (request, response) => {
  response.send('FETCHING ARTICLES');
})
app.post('/articles', bearer, authorize('write'), (request, response) => {
  response.send('CREATING NEW ARTICLES');
})
app.patch('/articles/:id', bearer, authorize('update'), (request, response) => {
  response.send('UPDATING ARTICLE');
})
app.delete('/articles/:id', bearer, authorize('delete'), (request, response) => {
  response.send('DELETING ARTICLE');
})

module.exports = app;