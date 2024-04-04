'use strict';

const { sequelize, Customer, Order } = require('../src/models');

beforeAll(async () => {
  await sequelize.sync();
});


describe('Testing the models', () => {
  test('Should create a single customer', async () => {
    let testCustomer = await Customer.create({
      name: 'test customer',
    });
    expect(testCustomer.id).toEqual(1);
    expect(testCustomer.name).toEqual('test customer');
  });

  test('Should create an order using a customerId', async () => {
    let testOrder = await Order.create({
      name: 'test order',
      customerId: 1
    });
    expect(testOrder.name).toEqual('test order');
    expect(testOrder.customerId).toEqual(1);
    expect(testOrder.id).toEqual(1);
  });

  test('Should fail at creating a non existent order on a customer', async () => {
    try {
      await Order.create({
        name: 'test order',
        customerId: 2
      });
    } catch (e){
      expect(e).toBeTruthy();
    }
  });

  test('Should be able to include order when querying customer data', async () => {
    const customer = await Customer.findOne({
      where: {id: 1},
      include: Order
    });
    expect(customer.name).toEqual('test customer');
    expect(customer.Orders).toBeTruthy();
  });
  test('Should be able to include order when querying customer data', async () => {
    const order = await Order.findOne({
      where: { id: 1 },
      include: Customer
    });
    expect(order.name).toEqual('test order');
    expect(order.Customer).toBeTruthy();
  });
});