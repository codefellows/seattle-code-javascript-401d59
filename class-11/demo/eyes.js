function cryAndGoInside(state, emitter) {
  if (state.brightness <= 40) {
    console.log('I am crying and I need to go inside');
    emitter.emit('cloudy', { brightness: 50 });
  } else {
    console.log('I am okay outside');
  }
}

module.exports = cryAndGoInside;