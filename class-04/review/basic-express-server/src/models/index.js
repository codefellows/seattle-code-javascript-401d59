'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PeopleSchema = require('./people'); 

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  People: PeopleSchema(sequelize, DataTypes),
  sequelize
}