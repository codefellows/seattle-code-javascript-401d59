require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./user-model');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = usersModel(sequelize, DataTypes)

module.exports = {
  User,
  sequelize
}