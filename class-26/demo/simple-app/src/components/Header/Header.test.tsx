import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Testing the header component', () => {
  test('Should render a title', async () => {
    render(
      <Header 
        title="Test Title"
        links={[{ href: 'test', src: 'test'}]}
      />
    );
    screen.debug(); // prints out all our HTML /JSX in our terminal
    expect(await screen.getByText('Test Title')).toBeVisible();
  });
});