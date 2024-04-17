'use strict';

const io = require('socket.io-client');
const createTransaction  = require('../lib/createTransaction');
let socket = io.connect('http://localhost:3000/banking');

socket.emit('join', {
  clientId: 'child',
  bankingId: 'family'
});
socket.on('join', console.log);

setInterval(() => {
  socket.emit('withdrawal', createTransaction(100));
}, 1000);

// socket.on('transaction-complete');