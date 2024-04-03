const { sequelize, Pokemon } = require('../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

describe('Pokemon Model', () => {
  it('Should create a pokemon row', async () => {
    const pikachu = await Pokemon.create({
      name: 'Pikachu',
      type: 'electric',
      healthPoints: 50,
      attackPoints: 70
    });

    expect(pikachu.name).toEqual('Pikachu');
    expect(pikachu.type).toEqual('electric');
    expect(pikachu.healthPoints).toEqual(50);
    expect(pikachu.attackPoints).toEqual(70);
  });

  xit('Should read a pokemon from the table', async () => {});
});