import { useState } from 'react';
import { Provider } from 'react-redux';
import { Box, TextField } from '@mui/material';
import store from './store';
import Poll from './components/Poll/Poll';
import Results from './components/Results/Results';
import './App.css'

function App() {
  const [userId, setUserId] = useState('');
  console.log(userId);
  return (
    <Provider store={store}>
      <Box>
        <TextField
          id="filled-search"
          label="User Id"
          type="search"
          variant="filled"
          onChange={(e) => setUserId(e.target.value)}
        />
        <Poll userId={userId} />
        <Results />
      </Box>
    </Provider>
  )
}

export default App
