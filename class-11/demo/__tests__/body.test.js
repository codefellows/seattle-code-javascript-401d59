const putOnHat = require('../head');
const putOnJacket = require('../arms');
const cryAndGoInside = require('../eyes');

describe('Testing Event Handlers', () => {
  test('Should put on hat when moisture is greater than 60', () => {
    const emitter = {
      emit: jest.fn(),
    }
    const state = {moisture: 61}
    console.log = jest.fn();

    putOnHat(state, emitter);
    expect(console.log).toHaveBeenCalledWith('putting on a hat');
    expect(emitter.emit).toHaveBeenCalledWith('rain', { moisture: 56 });
  });
})