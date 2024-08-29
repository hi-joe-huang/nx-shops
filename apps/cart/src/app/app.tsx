import { Route, Routes } from 'react-router-dom';

import '@nx-shops/shared/header';

import { CartCartPage } from '@nx-shops/cart/cart-page';

export const App = () => {
  return (
    <>
      <nx-shops-header />
      <Routes>
        <div>Change cart</div>
        <Route path="/" element={<CartCartPage />} />
      </Routes>
    </>
  );
};

export default App;
