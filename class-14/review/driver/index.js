const io = require('socket.io-client');
let socket = io.connect('http://localhost:3000/caps');

// signals the driver is ready.
setInterval(() => {
  socket.emit('get-pickup');
}, 1000);


socket.on('pick-up', (package) => {
  console.log('DRIVER HAS RECEIVED :', package);
  socket.emit('join', package);

  // driver can emit in-transit
  socket.emit('in-transit', package);

  // drive can emit delivered
  setTimeout(() => {
    socket.emit('delivered', package);
  }, 3000);
});
