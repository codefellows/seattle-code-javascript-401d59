import { useState } from 'react'
import AuthProvider from './context/Auth';
import ThemeProvider from './context/Theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <AuthProvider>
        <Header />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
