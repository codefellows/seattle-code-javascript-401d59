const io = require('socket.io');
const { StandardQueue, FifoQueue } = require('../lib/Queues');

const server = new io.Server(3000);
// create our caps server, with a namespace?
const capsServer = server.of('/caps');

const pickupQueue = new FifoQueue('pick-up');
const inTransitQueue = new StandardQueue('in-transit');
const deliveredQueue = new StandardQueue('delivered');

capsServer.on('connection', (socket) => {

  // the lab asks us to use rooms
  socket.on('join', ({ store }) => {
    socket.join(store);
    console.log('Client has joined :', store);

    // does anyone need notification???
  });

  // define the events that each socket with publish / subscribe
  socket.on('pick-up', (package) => {
    console.log('pick-up event emitted!!!', package);
    pickupQueue.add(package);
    console.log(pickupQueue);

    // we need the driver to tell us when they are ready
    // capsServer.emit('pick-up', package);
  });
  socket.on('in-transit', (package) => {
    console.log('in-transit event emitted!!!', package);
    inTransitQueue.set(package.orderId, package);
    capsServer.emit('in-transit', package);
  });
  socket.on('delivered', (package) => {
    console.log('delivered event emitted!!!', package);
    deliveredQueue.set(package.orderId, package);
    console.log(deliveredQueue);
    capsServer.emit('delivered', package);
  });

  // driver needs a way to check on pick up queue?
  socket.on('get-pickup', (payload) => {
    if (pickupQueue.peek()) {
      let nextPackage = pickupQueue.getNext();
      socket.emit('pick-up', nextPackage);
    } else {
      console.log("No Packages in pickups");
    }
  });

  // vendor notifies the server when it comes online.
  socket.on('get-deliveries', ({ store }) => {
    // look through the delivered queue, and only 
    let storeOrder = Object.values(deliveredQueue.data).filter(order => {
      if (order.store === store) {
        return true;
      } 
    });
    storeOrder.forEach((order) => {
      socket.emit('delivered', order);
    });
  });

  socket.on('delivery-receipt', (package) => {
    deliveredQueue.remove(package.orderId);
    console.log(deliveredQueue);
  });
});