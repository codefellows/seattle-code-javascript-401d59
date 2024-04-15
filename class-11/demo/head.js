function putOnHat(state, emitter) {
  if (state.moisture >= 60) {
    console.log('putting on a hat');
    emitter.emit('rain', { moisture: state.moisture - 5});
  } else {
    console.log('It is still kinda dry');
  }
}

module.exports = putOnHat;