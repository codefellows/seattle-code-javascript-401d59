'use strict';

const io = require('socket.io-client');
const createTransaction = require('../lib/createTransaction');
let socket = io.connect('http://localhost:3000/banking');

socket.emit('join', {
  clientId: 'parent',
  bankingId: 'family'
});
socket.on('join', console.log);
socket.emit('get-overdrafts', { bankingId: 'family' });

socket.on('overdraft', (payload) => {
  console.log('Accounted overdrafted by: ', payload.amount);
  socket.emit('deposit', createTransaction(1000 + payload.amount));
});

// socket.on('transaction-complete');