import { createStore } from 'redux';
import { reducer, userVote } from './candidates';

describe('Candidate Global State', () => {
  test('Should load initial state, with list of candiates, and initial vote number', () => {

    // a store is mainly 2 functions
      // getState -> returns initial / current state
    const store = createStore(reducer);

    const state = store.getState();
    expect(state.list[0].name).toEqual('Jacob');
    expect(state.totalVotes).toEqual(0);
  });
  test('Should increment candidate vote and total votes when userVote action is dispatched', () => {

    // dispatch -> takes an action that modifies global state.
    const store = createStore(reducer);
    store.dispatch(userVote('John'));

    const state = store.getState();
    console.log('OUR UPDATED STATE', state);
    expect(state.list[1].votes).toEqual(1);
    expect(state.totalVotes).toEqual(1);
  });
});
