const { sequelize, People } = require('../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('People Model', () => {
  it('Should create a person row', async () => {
    const emmittSmith = await People.create({
      name: 'emmitt smith',
      eyeColor: 'brown',
      age: 50,
      weight: 215,
    });

    expect(emmittSmith.name).toEqual('emmitt smith');
    expect(emmittSmith.eyeColor).toEqual('brown');
    expect(emmittSmith.age).toEqual(50);
    expect(emmittSmith.weight).toEqual(215);
  });

  xit('Should create a sport row', async () => {
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