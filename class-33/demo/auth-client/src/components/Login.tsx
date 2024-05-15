import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Auth';

export default function Login() {
  const { login, user, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('USER FROM CONTEXT', user, isLoggedIn);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name="username" onChange={(e) => setUsername(e.target.value)} />
      <input type='text' name="password" onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Login!</button>
    </form>
  )
}