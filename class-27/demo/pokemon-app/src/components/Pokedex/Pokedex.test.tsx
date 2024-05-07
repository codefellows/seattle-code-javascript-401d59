// what is the Job that the Pokedex component
import { render, screen } from '@testing-library/react';
import { Pokemon } from '../../index';
import Pokedex from './Pokedex';

describe('Testing the Pokedex', () => {
  // prints JSON values passed in as props
  test('prints Pokemon values passed in as props', async () => {
    const jacob: Pokemon = {
      name: 'Jacob',
      level: 100,
      abilities: ['js', 'aws'],
    } 

    render(
      <Pokedex data={[jacob]} />
    )

    screen.debug();
    expect(await screen.getByText(/Jacob/)).toBeVisible();
  })
});
