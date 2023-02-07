import React, { ReactNode } from 'react';

type ShoppingProps = {
  children: ReactNode;
};

import styles from './Shopping.module.scss';

function Shopping({ children }: ShoppingProps) {
  return <section className={styles.shopping}>{children}</section>;
}

export default Shopping;
