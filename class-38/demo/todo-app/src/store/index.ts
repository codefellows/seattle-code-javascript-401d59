import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from './todos';


// middleware in Redux has a syntax similar to Express

// store => the store object with getState, and dispatch, 
// next => function to call when middleware is finished,
// action => action object passed in on dispatch.
const logger = (store) => (next) => (action) => {
  let currentState = store.getState();
  console.log('I HAVE BEEN ACTIVATED', action, currentState);
  next(action);
}

// default Middleware => applies the thunk middleware for us. 
const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  // not banana, configuration property for our middleware functions
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export default store;