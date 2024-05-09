import React from 'react';
import { PeopleState, Person } from '../../App';

interface PeopleProps {
  removePerson: (arg0: Person) => void;
  state: PeopleState;
}

function People({ removePerson, state }: PeopleProps): React.ReactElement {

  const handleClick = (name: string) => {
    removePerson({ name });
  }

  return (
    <ul>
      <p>{state.count}</p>
      {
        state.list.map((person: Person) => {
          return <li onDoubleClick={() => handleClick(person.name)}>{person.name}</li>
        })
      }
    </ul>
  )
}

export default People;
