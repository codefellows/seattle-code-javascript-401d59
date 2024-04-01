const addition = require('../lib/addition');

// jest is our Test environment
describe('Addition function', () => {
  test('Should add 2 and 3 to equal 5', () => {
    expect(addition(2,3)).toEqual(5);
  });
});