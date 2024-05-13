import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import ThemedDiv from '../Theme/ThemedDiv';
import ToggleThemeButton from '../Theme/ToggleThemeButton';
import Login from '../Login/Login';

// useContext hook, opts into Context features

export default function Header(): React.ReactElement {

  let authState = useContext(AuthContext);

  return (
    <ThemedDiv>
      <ToggleThemeButton />
      <h1>Welcome to our App!</h1>
      <p>UserId: {authState.userId}</p>
      <p>Email: {authState.email}</p>
      <Login />
    </ThemedDiv>
  )
}