'use strict';

const io = require('socket.io-client');

// pass a url to a running server
let socket = io.connect('http://localhost:3000');

socket.on('response', console.log);
socket.emit('banana', { data: 'banana' });
