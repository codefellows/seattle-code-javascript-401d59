const initialState = [
  { name: 'Jacob', votes: 0 },
  { name: 'John', votes: 0 },
  { name: 'Brook', votes: 0 },
];

export function candidateReducer(state = initialState, action) {
  switch (action.type) {
    case "VOTE":
      return state.map((candidate) => {
        const newCandidate = {...candidate};
        if (candidate.name === action.payload.candidateId) {
          newCandidate.votes = newCandidate.votes + 1;
        }
        return newCandidate;
      })
    default:
      return state;
  }
}
