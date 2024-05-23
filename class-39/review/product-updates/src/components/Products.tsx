import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, updateProduct } from '../store/products';

export default function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(updateProduct(product));
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>You Products</h2>
      {products.products.map(product => (
        <div>
          <p>{product.name}</p>
          <p>{product.inStock}</p>
          <button onClick={() => handleCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}