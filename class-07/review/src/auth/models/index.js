require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users-model');

const environment = process.env.NODE_ENV;
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(process.env.DATABASE_URL, testOrProduction ? { logging: false } : {});

const Users = usersModel(sequelize, DataTypes)

module.exports = {
  Users,
  sequelize
}