// define all events that the clients will emit and listen for (subscribe, publish)

const io = require('socket.io');

const PORT = process.env.PORT || 3000;

// create a server thing?
const caps = new io.Server(PORT).of('/caps');

/**
 * Payload
 *  store
 *  clientId
 *  location
 *  orderId
 */

caps.on('connection', (socket) => {
  console.log('something has connected!!');

  // clients should join a room
  socket.on('join', ({ store, clientId }) => {
    socket.join(store);
    caps.emit('join', 'New Client has joined: ' + clientId);
  });
  
  // clients should be able to emit "pickup"
  socket.on('pickup', ({ store, orderID, address, customer }) => {
    console.log('We have a package!', orderID);
    caps.emit('pickup', { store, orderID, customer, address });
  });

  // clients should be able to emit "in-transit"
  socket.on('inTransit', ({ store, orderID, address, customer }) => {
    console.log('A Package is on its way!', orderID);
    caps.emit('inTransit', { store, orderID, customer, address });
  });

  // clients should be able to emit "delivered"
  socket.on('delivered', ({ store, orderID, address, customer }) => {
    console.log('A package has been delivered!', orderID);
    caps.emit('delivered', { store, orderID, customer, address });
  });
});
