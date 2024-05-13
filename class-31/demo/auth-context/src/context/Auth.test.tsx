import { render, screen } from '@testing-library/react';
import AuthProvider, { AuthContext } from './auth';

describe('Auth Context', () => {
  test('Should render userId and email', () => {

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(context) => (
            <>
              <p>{context.userId}</p>
              <p>{context.email}</p>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    )

    screen.debug();
    expect(screen.getByText('0001')).toBeVisible();
  });
});