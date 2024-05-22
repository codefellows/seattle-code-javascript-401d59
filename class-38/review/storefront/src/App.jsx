
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <hr />
      <Categories />
      <Products />
      <hr />
      <Footer />
    </Provider>
  )
}

export default App
