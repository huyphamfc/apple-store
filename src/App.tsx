import React from 'react';

import { Header } from 'components';
import { Shopping, Products, Cart } from 'layouts';

function App() {
  return (
    <>
      <Header />
      <Shopping>
        <Products />
        <Cart />
      </Shopping>
    </>
  );
}

export default App;
