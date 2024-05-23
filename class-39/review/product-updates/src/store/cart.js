import { createProduct } from './products';

const initialState = {
  items: [
  createProduct('kicks', 'shoes', 'things you wear on your feet', 'http://placehold.it/100x100', 50, 10),
  ],
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return { items: [...state.items, action.payload] };
    default:
      return state;
  }
}

// action for updating state???
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}