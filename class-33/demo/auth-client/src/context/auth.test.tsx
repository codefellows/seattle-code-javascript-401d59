import { useContext, useEffect } from 'react';
import {render, screen} from '@testing-library/react';
import AuthProvider, {AuthContext} from './Auth';

describe('Authentication Context Provider', () => {
  test('Should login a user with a valid username and password', async () => {

    const Login = () => {
      const { login, user } = useContext(AuthContext);

      useEffect(() => {
        console.log(user);
      }, [user]);

      useEffect(() => {
        login('Jacob', 'banana');
      }, []);

      return (
        <p data-testid="username">{user?.username}</p>
      )
    }

    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    )

    await expect(await screen.getByText('Jacob')).toBeVisible();
  });
})