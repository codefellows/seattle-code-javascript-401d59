import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = cookies.load('auth');
    validateToken(token);
  }, []);

  // basic authentication
  const login = async (username, password) => {
    const response = await axios.post('http://localhost:3000/signin', null,  {
      headers: {
        'Authorization': `basic ${btoa(username + ":" + password)}`
      }
    });
    setUser(response.data);
    cookies.save('auth', response.data.token);
    setIsLoggedIn(true);
  }

  const can = (capability) => {
    return user?.permissions?.includes(capability)
  }

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    cookies.remove('auth');
  }

  const validateToken = (token) => {
    try {
      let validUser = jwtDecode(token);
      setUser(validUser);
      setIsLoggedIn(true);
    } catch(e) {
      setError(e);
      logout();
    }
  }

  return (
    <AuthContext.Provider value={{ login, logout, user, error, isLoggedIn, can }}>
      {children}
    </AuthContext.Provider>
  )
}