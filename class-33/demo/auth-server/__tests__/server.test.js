const app = require('../server');
const supertest = require('supertest');
const { User, sequelize } = require('../models');

let user = null;
let admin = null

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  user = await User.create({ username: 'user', password: 'user'});
  admin = await User.create({ username: 'admin', password: 'admin', role: 'admin' });
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Server Routing tests', () => {
  test('Should be able to read with a valid user', async () => {
    let response = await request.get('/articles').set('authorization', `Bearer ${user.token}`);

    expect(response.status).toEqual(200);
  });
  test('Should be able to write with a valid admin user', async () => {
    let response = await request.post('/articles').set('authorization', `Bearer ${admin.token}`);

    expect(response.status).toEqual(200);
  });
  test('Should be able to update with a valid admin user', async () => {
    let response = await request.patch('/articles/1').set('authorization', `Bearer ${admin.token}`);

    expect(response.status).toEqual(200);
  });
  test('Should be able to delete with a valid admin user', async () => {
    let response = await request.delete('/articles/1000').set('authorization', `Bearer ${admin.token}`);

    expect(response.status).toEqual(200);
  });
})