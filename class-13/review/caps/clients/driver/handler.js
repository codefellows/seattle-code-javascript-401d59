function transit(events, payload) {
  console.log("DRIVER", "picked up", payload.orderID);
  events.emit("inTransit", payload); // Driver package pickup alert: emits "inTransit" event
}

function delivered(events, payload) {
  console.log("DRIVER", "delivered", payload.orderID);
  events.emit("delivered", payload); // Driver package delivery alert: emits "delivered" event
}

module.exports = { transit, delivered };
