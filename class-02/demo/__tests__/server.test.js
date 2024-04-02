'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(app);

describe('Express Server', () => {
  test('Should response with a 200 when a valid topping is present', async () => {
    let response = await request.get('/sandwich/cheese');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Here is a sandwich with cheese');
  });
  test('Should return a 404 when no topping is present', async () => {
    let response = await request.get('/sandwich');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid sandwich route');
  });
  test('Should return a 500 when an invalid topping is specified', async () => {
    let response = await request.get('/sandwich/cherry');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Not a good sandwich');
  });
});