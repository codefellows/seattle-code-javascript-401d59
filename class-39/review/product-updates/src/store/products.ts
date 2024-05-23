import axios from 'axios';

export const createProduct = (
  category,
  name,
  desc,
  image,
  price,
  countInStock,
) => ({
  category,
  name,
  description: desc,
  image,
  price,
  countInStock,
});

const initialState = {
  products: [
    createProduct(
      "Threads",
      "Blue Steel",
      "Elevate your style game with a sharp, modern blue suit that turns heads.",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      45.0,
      20,
    ),
    createProduct(
      "Kicks",
      "Stussy Creamsicles",
      "Step into summer vibes with the fresh and stylish Nike Stussy Creamsicles.",
      "https://images.unsplash.com/photo-1608319318013-290bac041539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpY2tzfGVufDB8fDB8fHww",
      50.0,
      15,
    ),
    createProduct(
      "Threads",
      "Grey Fushion",
      "Stay sleek and sophisticated in a timeless grey suit that's always in vogue.",
      "https://images.unsplash.com/photo-1619102814948-e164e584cf0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
      40.0,
      30,
    ),
    createProduct(
      "Kicks",
      "Cream Soda",
      "Quench your sneaker thirst with the ultra-cool Nike Cream Soda kicks.",
      "https://images.unsplash.com/photo-1617143207675-e7e6371f5f5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpY2tzfGVufDB8fDB8fHww",
      48.0,
      18,
    ),
  ],
  filteredProducts: [
    createProduct(
      "Threads",
      "Blue Steel",
      "Elevate your style game with a sharp, modern blue suit that turns heads.",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      45.0,
      20,
    ),
    createProduct(
      "Kicks",
      "Stussy Creamsicles",
      "Step into summer vibes with the fresh and stylish Nike Stussy Creamsicles.",
      "https://images.unsplash.com/photo-1608319318013-290bac041539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpY2tzfGVufDB8fDB8fHww",
      50.0,
      15,
    ),
    createProduct(
      "Threads",
      "Grey Fushion",
      "Stay sleek and sophisticated in a timeless grey suit that's always in vogue.",
      "https://images.unsplash.com/photo-1619102814948-e164e584cf0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
      40.0,
      30,
    ),
    createProduct(
      "Kicks",
      "Cream Soda",
      "Quench your sneaker thirst with the ultra-cool Nike Cream Soda kicks.",
      "https://images.unsplash.com/photo-1617143207675-e7e6371f5f5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpY2tzfGVufDB8fDB8fHww",
      48.0,
      18,
    ),
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        products: state.products,
        filteredProducts: state.products.filter((product) => {
          if (product.category === action.payload) {
            return product;
          } else if (action.payload === "") {
            return product;
          }
        }),
      };
    case 'REPLACE_PRODUCTS':
      return {
        products: action.payload,
        filterProducts: state.filteredProducts
      }
    case "SET_PRODUCT":
      return {
        products: state.products.map(product => {
          if(product._id === action.payload._id) {
            return action.payload;
          }
          return product
        }),
        filterProducts: state.filteredProducts
      }
    case 'ADD_TO_CART':
      console.log('DECREMENT PRODUCT COUNT');
      return state;
    default:
      return state;
  }
};

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  dispatch(replaceProducts(response.data.results));
}

// async action, uses the thunk
export const updateProduct = (product) => async (dispatch) => {

  try {
    const updatedValues = {...product, inStock: product.inStock - 1 }
    console.log('UPDATED PRODUCT VALUES', updatedValues);
    const response = await axios.put('https://api-js401.herokuapp.com/api/v1/products/' + product._id, {
      body: JSON.stringify(updatedValues),
    });
    console.log(reponse.data);
    dispatch(setProduct(updatedValues));
  } catch (e) {
    console.log('UPDATE PRODUCT ERROR', e);
  }
}

export const replaceProducts = (products) => {
  return {
    type: 'REPLACE_PRODUCTS',
    payload: products
  }
}

export const setProduct = (product) => {
  return {
    type: 'SET_PRODUCT',
    payload: product
  }
}

export const productsFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};

