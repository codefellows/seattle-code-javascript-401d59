'use strict';

const io = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = new io.Server(PORT);
const bankingServer = server.of('/banking');

server.on('connection', (socket) => {
  console.log('Client has Connected', socket.id);

  socket.on('banana', (payload) => {
    console.log('BANANA PAYLOAD', payload);
    // emits a notification to all sockets connected to the server.
    // server.emit('response', 'Here is the response data!');
    // send a notification to the same client that emitted the event.
    socket.emit('response', 'Only a single socket should receive this');
  });
});

bankingServer.on('connection', (socket) => {
  console.log('Client has connected to banking notification');

  bankingServer.emit('new-client', 'A new Client has joined!!');
  // socket.io can create "channels"
  socket.on('join', (payload) => {
    socket.join(payload.bankingId);
    bankingServer.emit('join', payload.clientId + ' has joined the banking app!');
  });

  socket.on('withdrawal', (payload) => {
    console.log('WITHDRAWAL EVENT!', payload);

    bankingServer.to(payload.bankingId).emit('withdrawal', payload);
  });

  socket.on('deposit', (payload) => {
    console.log('DEPOSIT EVENT', payload);
    bankingServer.to(payload.bankingId).emit('deposit', payload);
  });

  socket.on('overdraft', (payload) => {
    console.log('OVERDRAFT EVENT', payload);

    bankingServer.to(payload.bankingId).emit('overdraft', {amount: Math.abs(payload.amount)});
  });
});
