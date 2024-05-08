import { useState, useEffect } from 'react';
import People from './components/People/People'
import './App.css'

function App() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [requestParams, setRequestParams] = useState({method: null, url: null, body: null});

  useEffect(() => {
    console.log('Make API Request');
  }, [requestParams]);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Render People!</button>
      <button onClick={() => setCount(count + 1)}>Update Count {count}</button>
      {visible ? <People count={count} /> : null}
    </>
  )
}

export default App
