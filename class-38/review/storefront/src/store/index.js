
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart.js';
import { productReducer } from './products.js';
import { categoryReducer } from './categories';

export default configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer
  }
});