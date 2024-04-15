const events = require('events');
const putOnHat = require('./head');
const cryAndGoInside = require('./eyes');
const putOnJacket = require('./arms');

// singleton -> there can only be one.
const emitter = new events.EventEmitter();

const state = {
  brightness: 50,
  temperature: 50,
  moisture: 50,
}

// publisher of state changes
const sun = {
  makeRainy: () => {
    let value = state.moisture + 10;
    emitter.emit('rain', { moisture: value });
  },
  makeColder: () => {
    let value = state.temperature - 10;
    emitter.emit('hotter', { temperature: value }); 
  },
  makeCloudy: () => {
    let value = state.brightness - 10;
    emitter.emit('cloudy', { brightness: value });
  }
}

emitter.on('rain', (payload) => {
  state.moisture = payload.moisture;
  console.log('Its raining :(', state);
  putOnHat(state, emitter);
});
emitter.on('cloudy', (payload) => {
  state.brightness = payload.brightness;
  console.log('it getting cloudy!', state);
  cryAndGoInside(state, emitter);
})
emitter.on('hotter', (payload) => {
  state.temperature = payload.temperature;
  console.log('Its getting hotter', state);
  putOnJacket(state, emitter);
});// subscriber 

// sun.makeCloudy();
// sun.makeRainy();
sun.makeColder();

