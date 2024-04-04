'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const customerSchema = require('./customers');
const orderSchema = require('./orders');
const Collection = require('./Collection.js');

let sequelize =  new Sequelize(DATABASE_URL);

const Customer = customerSchema(sequelize, DataTypes);
const Order = orderSchema(sequelize, DataTypes);

Customer.hasMany(Order, {foreignKey: 'customerId', sourceKey: 'id' });
Order.belongsTo(Customer, {foreignKey: 'customerId', targetKey: 'id'});

module.exports = {
  sequelize,
  Customer,
  Order,
  Collection,
}
