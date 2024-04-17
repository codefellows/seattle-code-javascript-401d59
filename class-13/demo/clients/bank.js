'use strict';

const io = require('socket.io-client');

let socket = io.connect('http://localhost:3000/banking');

const bankData = {
  balance: 1000
}

socket.emit('join', {
  clientId: 'bank',
  bankingId: 'family'
});
socket.on('join', console.log);
socket.emit('get-transactions', { bankingId: 'family' });

socket.on('new-client', (payload) => {
  console.log('message from server:', payload);
});

socket.on('deposit',(payload) => {
  bankData.balance = bankData.balance + payload.amount;
  console.log('deposit processed, new balance', bankData);
  socket.emit('transaction-complete', {...payload, type: 'deposit' });
});
socket.on('withdrawal', (payload) => {
  console.log('incoming withdrawal', payload);
  bankData.balance = bankData.balance - payload.amount;
  console.log('withdrawal processed, new balance', bankData);
  if (bankData.balance < 0) {
    socket.emit('overdraft', { amount: bankData.balance, bankingId: 'family', id: payload.id });
  }
  socket.emit('transaction-complete', { ...payload, type: 'withdrawal' });
});