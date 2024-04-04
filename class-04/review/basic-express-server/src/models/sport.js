'use strict';

const Sport = (sequelize, DataTypes) => sequelize.define('Sport', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    yearsPlayed: DataTypes.INTEGER,
    pointsScored: DataTypes.INTEGER,
});

module.exports = Sport;