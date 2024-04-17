// VENDOR ROLE: Responsible for creating and submitting new packages to the system

const Chance = require("chance");

const chance = new Chance();

function onNewPackage(payload) {
  return (payload = {
    // store: chance.word({ length: 5 }),
    store: '401d59',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  });
}

module.exports = onNewPackage;

