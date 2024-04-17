const chance = new require('chance').Chance();

class Transaction {
  constructor(amount) {
    this.amount = amount;
    this.bankingId = 'family',
    this.id = chance.guid()
  }
}

module.exports = (amount) => {
  return new Transaction(amount);
}