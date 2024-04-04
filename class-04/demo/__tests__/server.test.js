'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
})

describe('Server testing', () => {
  test('Should create a customer using POST to /customer', async () => {
    let response = await request.post('/customers').send({ name: 'Jacob' });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jacob');
  });
})