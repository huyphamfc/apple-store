import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { RootState } from 'store';

function Header() {
  const { totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>Apple Store</h1>
        <p>
          Your Cart <span className={styles.header__badge}>{totalAmount}</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
