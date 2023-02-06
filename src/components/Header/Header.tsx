import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>Apple Store</h1>
        <p>
          Your Cart <span className={styles.header__badge}>999</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
