import { useReducer } from 'react';
import Form from './components/Form/Form';
import People from './components/People/People';
import './App.css'

export type PeopleState = {
  list: Array<Person>;
  count: number
}

export type Person = {
  name: string;
}

type Action = {
  type: string,
  payload: Person
}

// initialState
const initialState: PeopleState = {
  list: [],
  count: 0
}

// reducer function
function peopleReducer(state = initialState, action: Action) {
  switch(action.type) {
    case 'ADD':
      return { count: state.count + 1, list: [...state.list, action.payload] }
    case 'REMOVE':
      return { count: state.count - 1, list: state.list.filter((person: Person) => person.name !== action.payload.name)}
    case 'REPLACE':
    default:
      return state;
  }
}


// actions
const add = (noun: Person): Action => {
  return {
    type: 'ADD',
    payload: noun
  }
}

const remove = (noun: Person) => {
  return {
    type: 'REMOVE',
    payload: noun
  }
}

function App() {

  const [state, dispatch] = useReducer(peopleReducer, initialState);

  return (
    <>
      <h1>Reducer People!</h1>
      <div>
        <Form createPerson={(person: Person) => dispatch(add(person))}/>
        <People removePerson={(person: Person) => dispatch(remove(person))} state={state} />
      </div>
    </>
  )
}

export default App
