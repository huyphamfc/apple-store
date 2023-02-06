import React from 'react';

import styles from './ProductsWrapper.module.scss';
import ProductItem from '../ProductItem';
import products from '../dummy-data';

function ProductsWrapper() {
  const productList = products.map((prod) => <ProductItem key={prod.id} {...prod} />);

  return (
    <div className={styles.products}>
      <h2 className={styles.products__title}>Our Products</h2>
      <ul className={styles.products__content}>{productList}</ul>
    </div>
  );
}

export default ProductsWrapper;
