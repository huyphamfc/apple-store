import React from 'react';

import styles from './ProductItem.module.scss';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  imgAlt: string;
};

function ProductItem(props: ProductItemProps) {
  const { name, price, imgSrc, imgAlt } = props;

  return (
    <li className={styles.product}>
      <figure className={styles.product__img}>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className={styles.product__text}>
        <h3 className={styles.product__name}>{name}</h3>
        <span>${price}</span>
      </div>
      <form className={styles.product__form}>
        <label>
          Amount:{' '}
          <input className={styles.product__input} type="number" defaultValue="1" min="1" max="5" />
        </label>
        <button className={styles.product__btn}>Add</button>
      </form>
    </li>
  );
}

export default ProductItem;
