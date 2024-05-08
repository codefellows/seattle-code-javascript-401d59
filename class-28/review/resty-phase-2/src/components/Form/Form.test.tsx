import { screen, render, fireEvent } from '@testing-library/react';
import Form from './Form';

// contracts -> agreement between 2 parties

// Component is 1 party, the user is the other.

// Form: accept inputs,  calls a function to make a request

// what does this look like?
  // feels very abstract.
  // manual tests feel more natural.
describe("Form Component", () => {
  test('Renders a GET POST PUT PATCH and DELETE button', async()=> {
    render(<Form handleSubmit={console.log} />);

    screen.debug(); // this prints the "HTML" in our terminal.

    expect(await screen.getByText(/GET/)).toBeVisible();
    expect(await screen.getByText(/POST/)).toBeVisible();
    expect(await screen.getByText(/PUT/)).toBeVisible();
    expect(await screen.getByText(/PATCH/)).toBeVisible();
    expect(await screen.getByText(/DELETE/)).toBeVisible();
  });
  test('Calls a function on submit', async() => {
    const state = { results: { method: null, url: null} };
    const testFunction = (param: {method: string, url: string}) => {
      state.results = param;
    }

    render(<Form handleSubmit={testFunction}/>)
    const postBtn = await screen.getByText('POST');
    const urlInput = await screen.getByTestId('url-input');
    fireEvent.click(postBtn);
    fireEvent.change(urlInput, { target: { value: 'test' }});
    fireEvent.click(await screen.getByText('GO'));
  }); 
});