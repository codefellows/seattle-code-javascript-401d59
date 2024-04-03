'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PokemonSchema = require('./Pokemon'); 

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  Pokemon: PokemonSchema(sequelize, DataTypes),
  sequelize
}
