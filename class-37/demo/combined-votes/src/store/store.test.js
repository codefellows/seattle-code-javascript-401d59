import store from './index';
import { vote } from './votes';

describe('Candidate Global State', () => {
  test('Should load initial state, with list of candidates, and initial vote number', () => {

    const state = store.getState();
    console.log(state);
    expect(state.candidates[0].name).toEqual('Jacob');
    expect(state.totalVotes).toEqual(0);
  });
  test('Should increment candidate vote and total votes when userVote action is dispatched', () => {

    store.dispatch(vote('John', 'Jacob'));
    store.dispatch(vote('Brook', 'Jacob'));

    const state = store.getState();
    console.log('OUR UPDATED STATE', state);
    expect(state.candidates[1].votes).toEqual(1);
    expect(state.totalVotes).toEqual(2);
  });
});