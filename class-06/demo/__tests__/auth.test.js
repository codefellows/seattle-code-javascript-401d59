'use strict';

const app = require('../server.js');
const supertest = require('supertest');

const request = supertest(app);

// sync the db
// beforeAll();

describe('Authentication', () => {
  test('Should be able to create a new user by sending a POST to /signup', async () => {
    let response = await request.post('/signup').auth('username', 'password');
    expect(response.status).beEqual(200);
  });
  test('Should be able to create a new user by sending a POST to /signup', async () => {
    let response = await request.post('/signin').auth('username', 'password');
    expect(response.status).beEqual(200);
  });
});