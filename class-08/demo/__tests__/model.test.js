const { User, sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('User Model', () => {
  test('Should create a user with default user type', async () => {
    let newUser = await User.create({ username: 'Userton', password: 'orange' });

    expect(newUser.username).toEqual('Userton');
    expect(newUser.password).toBeTruthy();
    expect(newUser.role).toEqual('user');
    expect(newUser.permissions).toEqual(['read']);
  });
  test('Should create a admin with all permissions', async () => {
    let newUser = await User.create({ username: 'Userton Sr.', password: 'blue', role: 'admin' });

    console.log(newUser.permissions);
    expect(newUser.username).toEqual('Userton Sr.');
    expect(newUser.password).toBeTruthy();
    expect(newUser.role).toEqual('admin');
    expect(newUser.permissions).toEqual(['read', 'write', 'update', 'delete']);
  });
});