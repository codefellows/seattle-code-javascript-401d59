import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form/Form';
import './App.css'


const API_URL = import.meta.env.VITE_API_URL;
console.log('MY ENVIRONMENT VARIABLE', API_URL);

function App() {
  const handleSubmit = (params: { method: string, url: string}) => {
    console.log(params);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Form handleSubmit={handleSubmit}/>
    </>
  )
}

export default App
