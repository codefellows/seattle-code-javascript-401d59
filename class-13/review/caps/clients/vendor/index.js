// VENDOR ROLE: Responsible for listening to delivery notifications and submitting new packages

const newPackage = require("./handler.js");
const io = require('socket.io-client');

const url = 'http://localhost:3000/caps';
const events = io.connect(url);

events.emit('join', { store: '401d59', clientId: 'vendor' });
events.on('join', console.log);

function makePayload() {
  let payload = newPackage();
  events.emit("pickup", payload); // Vendor package pickup alert: emits "pickup" event
}

function delivered() {
  events.on("delivered", () => {
    console.log("VENDOR", "Thank you for the delivery!"); // Vendor package delivery notification
  });
}

delivered();
makePayload();
