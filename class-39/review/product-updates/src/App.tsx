import { Provider } from 'react-redux';
import store from './store';
import './App.css'
import Products from './components/Products';

function App() {

  return (
    <Provider store={store}>
      <Products />
    </Provider>
  )
}

export default App
