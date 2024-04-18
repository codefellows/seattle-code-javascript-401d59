const io = require('socket.io-client');
const chance = new require('chance').Chance();
let socket = io.connect('http://localhost:3000/caps');

class Package {
  constructor(storeName) {
    this.store = storeName;
    this.orderId = chance.guid();
    this.address = chance.address();
    this.customer = chance.first();
  }
}

socket.emit('get-deliveries', { store: '1-800-flowers'});

socket.on('delivered', (package) => {
  console.log('Thank you!', package.customer);
  socket.emit('delivery-receipt',  package);
});

setInterval(() => {
  let newPackage = new Package('1-800-flowers');
  socket.emit('pick-up', newPackage);
}, 1000);