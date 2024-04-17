'use strict';

const io = require('socket.io');
const { StandardQueue, FifoQueue } = require('../lib/Queues');
const PORT = process.env.PORT || 3000;

const server = new io.Server(PORT);
const bankingServer = server.of('/banking');

const overdrafts = new FifoQueue('overdrafts'); // pickup FifoQueue??
const deposits = new StandardQueue('deposits'); // in-transit and delivered are StandardQueue
const withdrawals = new StandardQueue('withdrawals');


bankingServer.on('connection', (socket) => {
  console.log('Client has connected to banking notification');

  bankingServer.emit('new-client', 'A new Client has joined!!');
  socket.on('join', (payload) => {
    console.log(overdrafts, deposits, withdrawals);
    socket.join(payload.bankingId);
    bankingServer.emit('join', payload.clientId + ' has joined the banking app!');
  });

  socket.on('withdrawal', (payload) => {
    withdrawals.set(payload.id, payload);
    console.log('WITHDRAWAL HAS OCCURED!', withdrawals);
    bankingServer.to(payload.bankingId).emit('withdrawal', payload);
  });

  socket.on('deposit', (payload) => {
    deposits.set(payload.id, payload);
    console.log('DEPOSIT EVENT', deposits, payload);
    bankingServer.to(payload.bankingId).emit('deposit', payload);
  });

  socket.on('overdraft', (payload) => {
    overdrafts.add(payload);
    console.log('OVERDRAFT EVENT', overdrafts);
    bankingServer.to(payload.bankingId).emit('overdraft', {amount: Math.abs(payload.amount)});
  });

  // what other events do we need to garantee message reciept.
  socket.on('get-transactions', (payload) => {
    console.log('sending out pending transactions', payload);
    Object.values(withdrawals.data).forEach(withdrawal => {
      bankingServer.to(payload.bankingId).emit('withdrawal', withdrawal);
    });
    Object.values(deposits.data).forEach(deposit => {
      bankingServer.to(payload.bankingId).emit('deposit', deposit);
    });
  });
  socket.on('get-overdrafts', (payload) => {
    while(overdrafts.peek()) {
      socket.emit('overdraft', overdrafts.getNext());
    }
  });

  // event to remove messages that have been read
  socket.on('transaction-complete', (payload) => {
    if (payload.type === 'deposit') {
      deposits.remove(payload.id);
      console.log(deposits);
    } else {
      withdrawals.remove(payload.id);
      console.log(withdrawals);
    }
  });
});
