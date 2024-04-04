'use strict';

const People = (sequelize, DataTypes) => sequelize.define('People', {
    name: DataTypes.STRING,
    eyeColor: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
});

module.exports = People;