'use strict';
// using sequelize to model out data, the string is the table name
const Pokemon = (sequelize, DataTypes) => sequelize.define('Pokemon', {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  healthPoints: DataTypes.INTEGER,
  attackPoints: DataTypes.INTEGER,
});

module.exports = Pokemon;
