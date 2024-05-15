import { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import Login from './Login';

export default function Auth({ children, capability }) {
  const { isLoggedIn, user, can } = useContext(AuthContext);
  console.log(user);
  if (isLoggedIn && can(capability)) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return <Login />
  }

}