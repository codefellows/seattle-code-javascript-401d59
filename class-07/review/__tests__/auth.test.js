const supertest = require('supertest');
const { app } = require('../app.js');
const { sequelize} = require('../src/auth/models');
const base64 = require('base-64');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Authentication', () => {
  test('Should allow users to signup', async () => {
    let username = 'Testy McTesterson';
    let password = 'supersecretsquirrel';

    let response = await request.post('/signup').send({
      username,
      password
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Testy McTesterson');
    expect(response.body.password).toBeTruthy();
  });
  test('Should allow users to signin', async () => {
    let username = 'Testy McTesterson';
    let password = 'supersecretsquirrel';
    let encoded = base64.encode(username + ':' + password);

    let response = await request.post('/signin').set({
      authorization: `Basic ${encoded}`
    });
    // request.post('/signin').auth(username, password);

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Testy McTesterson');
    expect(response.body.password).toBeTruthy();
  });
});

