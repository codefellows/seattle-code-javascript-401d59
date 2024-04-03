const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelize, Pokemon } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await Pokemon.create({
    name: 'test',
    type: 'test',
    attackPoints: 0,
    healthPoints:0
  });
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Express Server', () => {
  it('Should read all pokemon in the database and respond with status 200', async () => {
    let response = await request.get('/api/pokemon');
    expect(response.status).toEqual(200);
    expect(response.body.length > 0).toBeTruthy();
  });
  it('Should create a new Pokemon and return a status 200', async () => {
    let response = await request.post('/api/pokemon').send({
      name: 'test2',
      type: 'test2',
      healthPoints: 10,
      attackPoints: 10,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test2');
  });
})