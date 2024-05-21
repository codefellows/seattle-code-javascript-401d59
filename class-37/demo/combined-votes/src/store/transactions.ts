const initialState = [];

export function transactionReducer(state = initialState, action) {
  switch(action.type) {
    case 'VOTE':
      return [...state, action.payload];
    default:
      return state;
  }
}