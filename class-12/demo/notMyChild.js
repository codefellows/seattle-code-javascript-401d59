'use strict';

const io = require('socket.io-client');

let socket = io.connect('http://localhost:3000/banking');

socket.emit('join', {
  clientId: 'child',
  bankingId: 'orphan'
});
socket.on('join', console.log);

setInterval(() => {
  socket.emit('withdrawal', { amount: 100, bankingId: 'orphan' });
}, 2000);
