import {render, screen, fireEvent} from '@testing-library/react';
import People from './People';
import { PeopleState, Person } from '../../App';


describe('People component', () => {
  test('Should display all items in people state, and call a callback function', () => {
    let results: Person | null = null;
    const testFunction = (person: Person) => {
      results = person;
    }
    const state: PeopleState = {
      count: 1,
      list: [{name: 'test'}]
    }
    render(
      <People 
        removePerson={testFunction}
        state={state}
      />
    )

    screen.debug();
    const nameElement = screen.getByText(/test/);
    expect(screen.getByText(/1/)).toBeVisible();
    expect(nameElement).toBeVisible();

    fireEvent.doubleClick(nameElement);
    expect(results).toEqual({ name: 'test' });
  });
})