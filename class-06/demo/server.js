'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(DATABASE_URL);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Users.beforeCreate(async function (user) {
  user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
});

app.post('/signup', async (request, response) => {
  console.log(request.headers);

  let authString = request.headers.authorization.split(' ')[1];
  let [ username, password ] = base64.decode(authString).split(':');
  
  // const hash = await bcrypt.hash(password, 10);
  const user = await Users.create({ username: username, passwordHash: password });
  
  response.send(user);
});
app.post('/signin', async (request, response) => {
 
  let authString = request.headers.authorization.split(' ')[1];
  let [username, password] = base64.decode(authString).split(':');
  console.log(username, password);
  let userQuery = await Users.findOne({ where: { username: username }});
  let validPassword = await bcrypt.compare(password, userQuery.passwordHash);

  if (validPassword) {
    response.status(200).send(userQuery);
  } else {
    response.status(401).send('Invalid Username or Password');
  }
});

sequelize.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log('SERVER UP ON PORT:: ', PORT);
  });
});
