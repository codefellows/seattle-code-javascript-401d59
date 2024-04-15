function putOnJacket(state, emitter) {
  if (state.temperature <= 40) {
    console.log('I am putting on a jacket!');
    emitter.emit('hotter', { temperature: state.temperature + 10 });
  } else {
    console.log('I feel warm!');
  }
}

module.exports = putOnJacket;