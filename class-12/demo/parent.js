'use strict';

const io = require('socket.io-client');

let socket = io.connect('http://localhost:3000/banking');

socket.emit('join', {
  clientId: 'parent',
  bankingId: 'family'
});
socket.on('join', console.log);

socket.on('overdraft', (payload) => {
  console.log('Accounted overdrafted by: ', payload.amount);
  socket.emit('deposit', { amount: 1000 + payload.amount, bankingId: 'family' });
});