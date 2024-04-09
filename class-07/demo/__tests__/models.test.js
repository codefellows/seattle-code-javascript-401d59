const { sequelize, User } = require('../models');

let token = null;

beforeAll(async() => {
  await sequelize.sync();
  let record = await User.create({
    username: 'testy',
    password: 'testPassword'
  });
  token = record.token;
});
afterAll(async () => {
  await sequelize.sync();
})

describe('Models', () => {
  test('Should create a user with a token attached', async () => {
    const jacob = await User.create({ username: 'Jacob', password: 'banana'});

    expect(jacob.username).toEqual('Jacob');
    expect(jacob.password).not.toEqual('banana');
    expect(jacob.token).toBeTruthy();
  });

  test('Should be able to authenticate basic credentials', async () => {
    let user = await User.authenticateBasic('testy', 'testPassword');

    expect(user.username).toEqual('testy');
    expect(user.password).not.toEqual('testPassword');
    expect(user.token).toBeTruthy();
  });
  test('Should be able to authenticateBearer', async () => {
    let user = await User.authenticateBearer(token);

    expect(user.username).toEqual('testy');
    expect(user.password).not.toEqual('testPassword');
    expect(user.token).toBeTruthy();
  });
});