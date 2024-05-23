import { Provider } from 'react-redux';
import store from './store';
import Todos from './components/Todos';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App
