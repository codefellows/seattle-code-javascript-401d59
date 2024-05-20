// create my initial state + reducer function + actions

type Candidate = {
  name: string,
  votes: number,
}

interface CandidateState {
  list: Array<Candidate>
  totalVotes: number
}

interface ReduxAction {
  type: string,
  payload: unknown
}

const initialState: CandidateState = {
  list: [
    { name: 'Jacob', votes: 0 },
    { name: 'John', votes: 0 },
    { name: 'Brook', votes: 0 }
  ],
  totalVotes: 0
}

// reducer uses switch statements to determine which type of action is called 
export const reducer = (state = initialState, action: ReduxAction) => {
  switch(action.type) {
    case 'VOTE':
      return {
        list: state.list.map((candidate) => {
          if (candidate.name === action.payload) {
            candidate.votes++;
          }
          return candidate;
        }),
        totalVotes: state.totalVotes + 1
      }
    default:
      return state;
  }
}

// User Vote Action that we can "DISPATCH" our state change to the reducer.
export const userVote = (name: string): ReduxAction => {
  return {
    type: 'VOTE',
    payload: name,
  }
}