import { Provider } from 'react-redux';
import Poll from './components/Poll/Poll';
import Results from './components/Results/Results';
import store from './store';
import './App.css'

function App() {
  return (
    // ingests a "store" object from the createStore redux function.
    <Provider store={store}>
      <Poll />
      <Results />
    </Provider>
  )
}

export default App
