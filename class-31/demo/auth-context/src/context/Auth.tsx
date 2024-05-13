import { createContext, useState } from "react";

// export 2 things 
// 1. Provider -> component to publish values
// 2. Context Object that Consumer subscribe to.

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [userId, setUserId] = useState('0001');
  const [email, setEmail] = useState('jacob@codefellows.com');

  return (
    // value => the values we want to provide to any child component.
    <AuthContext.Provider value={{ userId, email }}>
      {children}
    </AuthContext.Provider>
  )
}
