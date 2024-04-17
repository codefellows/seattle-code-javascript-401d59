const io = require('socket.io-client');
const handler = require("./handler.js");

const url = 'http://localhost:3000/caps';
const events = io.connect(url);

events.emit('join', { store: '401d59', clientId: 'driver'});
events.on('join', console.log);

function pickedUP() {
  events.on("pickup", (payload) => handler.transit(events, payload)); // Driver package pickup notification
}

function droppingOff() {
  events.on("inTransit", (payload) => handler.delivered(events, payload)); // Driver package delivery notification
}

pickedUP();
droppingOff();
// module.exports = { pickedUP, droppingOff };
