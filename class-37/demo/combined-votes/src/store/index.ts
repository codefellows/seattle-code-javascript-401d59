import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { candidateReducer } from './candidates';
import { voteReducer } from './votes';
import { transactionReducer } from './transactions';

// Creates a unified state reducer function, state properties will match the properties you pass into combineReducers.
// const mainReducer = combineReducers({
//   candidates: candidateReducer,
//   totalVotes: voteReducer, 
// });

export default configureStore({
  reducer: {
    candidates: candidateReducer,
    totalVotes: voteReducer, 
    transactions: transactionReducer
  }
});
