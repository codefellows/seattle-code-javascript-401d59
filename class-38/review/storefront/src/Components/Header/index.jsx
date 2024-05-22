import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import AnchorTemporaryDrawer from '../Cart';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.length;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header style={{ display: 'flex', alignContent: 'space-between' }}>
      <div>
        <h1 style={{ marginLeft: '30px' }}>
          Kicks and Threads Store
        </h1>
      </div>
      <div>
        <Button onClick={toggleDrawer('right', true)}>
          Cart: {cartItemCount}
        </Button>
        <AnchorTemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};

export default Header;
