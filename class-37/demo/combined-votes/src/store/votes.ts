const initialState = 0;

export function voteReducer(state = initialState, action) {
  switch (action.type) {
    case "VOTE":
      return state + 1;
    default:
      return state;
  }
}

export function vote(candidateId, userId) {
  return {
    type: 'VOTE',
    payload: {candidateId, userId}
  }
}