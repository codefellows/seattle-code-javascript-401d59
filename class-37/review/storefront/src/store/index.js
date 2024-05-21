
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './products.js';
import { categoryReducer } from './categories';

export default configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  }
});