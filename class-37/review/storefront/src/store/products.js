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
      "Sativa",
      "Blue Dream",
      "A potent cross between Blueberry and Haze. Blue Dream balances full-body relaxation with gentle cerebral invigoration.",
      "https://images.leafly.com/flower-images/blue-dream.png?auto=compress%2Cformat&w=350&dpr=1",
      45.0,
      20,
    ),
    createProduct(
      "Indica",
      "Granddaddy Purple",
      "A famous indica cross of Mendo Purps, Skunk, and Afghanistan. Granddaddy Purple delivers a fusion of cerebral euphoria and physical relaxation.",
      "https://images.leafly.com/flower-images/granddaddy-purple.png?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/granddaddy-purple",
      50.0,
      15,
    ),
    createProduct(
      "Hybrid",
      "Girl Scout Cookies",
      "GSC is a hybrid strain that blends OG Kush and Durban Poison. Known for its euphoric effects and creative energy.",
      "https://images.leafly.com/flower-images/gsc.png?auto=compress%2Cformat&w=350&dpr=1",
      55.0,
      25,
    ),
    createProduct(
      "Sativa",
      "Sour Diesel",
      "A fast-acting sativa strain with invigorating cerebral effects. Perfect for a burst of energy and creativity.",
      "https://leafly-public.imgix.net/strains/photos/5SPDG4T4TcSO8PgLgWHO_SourDiesel_AdobeStock_171888473.jpg?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/sour-diesel",
      40.0,
      30,
    ),
    createProduct(
      "Indica",
      "Northern Lights",
      "A pure indica strain known for its relaxing effects, Northern Lights is perfect for unwinding and easing pain.",
      "https://images.leafly.com/flower-images/northern-lights.png?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/northern-lights",
      48.0,
      18,
    ),
  ],
  filteredProducts: [
    createProduct(
      "Sativa",
      "Blue Dream",
      "A potent cross between Blueberry and Haze. Blue Dream balances full-body relaxation with gentle cerebral invigoration.",
      "https://images.leafly.com/flower-images/blue-dream.png?auto=compress%2Cformat&w=350&dpr=1",
      45.0,
      20,
    ),
    createProduct(
      "Indica",
      "Granddaddy Purple",
      "A famous indica cross of Mendo Purps, Skunk, and Afghanistan. Granddaddy Purple delivers a fusion of cerebral euphoria and physical relaxation.",
      "https://images.leafly.com/flower-images/granddaddy-purple.png?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/granddaddy-purple",
      50.0,
      15,
    ),
    createProduct(
      "Hybrid",
      "Girl Scout Cookies",
      "GSC is a hybrid strain that blends OG Kush and Durban Poison. Known for its euphoric effects and creative energy.",
      "https://images.leafly.com/flower-images/gsc.png?auto=compress%2Cformat&w=350&dpr=1",
      55.0,
      25,
    ),
    createProduct(
      "Sativa",
      "Sour Diesel",
      "A fast-acting sativa strain with invigorating cerebral effects. Perfect for a burst of energy and creativity.",
      "https://leafly-public.imgix.net/strains/photos/5SPDG4T4TcSO8PgLgWHO_SourDiesel_AdobeStock_171888473.jpg?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/sour-diesel",
      40.0,
      30,
    ),
    createProduct(
      "Indica",
      "Northern Lights",
      "A pure indica strain known for its relaxing effects, Northern Lights is perfect for unwinding and easing pain.",
      "https://images.leafly.com/flower-images/northern-lights.png?auto=compress%2Cformat&w=350&dpr=1ttps://www.leafly.com/strains/northern-lights",
      48.0,
      18,
    ),
  ],
};

export const productReducer = (state = initialState, action) => {
  // why use a switch??
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

    default:
      return state;
  }
};

export const productFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};

