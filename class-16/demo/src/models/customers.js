'use strict';

const customers = (sequelize, DataTypes) => {
  return sequelize.define('Customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}

module.exports = customers;
