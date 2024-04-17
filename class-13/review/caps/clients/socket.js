// System hub responsible for managing events and interactions between drivers and vendors

const events = require("./eventPool");
const driverListening = require("./driver");
const vendor = require("./vendor");

let state = {
  event: "no events yet",
  time: "no time yet",
  payload: {
    store: "store name",
    orderID: "order number",
    customer: "customer name",
    address: "customer address",
  },
};

driverListening.pickedUP();
driverListening.droppingOff();
vendor.delivered();

events.on("pickup", (payload) => { // Event processing: handles package pickup event
  state = {
    event: "pickup",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", state);
});

events.on("inTransit", (payload) => { // Event processing: handles package in transit event
  state = {
    event: "inTransit",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", state);
});

events.on("delivered", (payload) => { // Event processing: handles package delivery event
  state = {
    event: "delivered",
    time: new Date(),
    payload: payload,
  };
  console.log("EVENT:", state);
});

vendor.makePayload();
