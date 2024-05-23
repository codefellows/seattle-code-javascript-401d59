
import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './products';

export default configureStore({
  reducer: {
    products: productReducer,
  }
});