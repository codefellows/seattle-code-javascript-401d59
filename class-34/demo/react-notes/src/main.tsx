import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from './context/auth.tsx';
import ListProvider from './context/list.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </AuthProvider>
  </React.StrictMode>,
)
