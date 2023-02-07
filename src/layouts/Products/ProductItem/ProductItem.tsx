import React, { useRef, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ProductItem.module.scss';
import { addCart } from 'store';

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  imgAlt: string;
};

function ProductItem(props: ProductItemProps) {
  const amountRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { id, name, price, imgSrc, imgAlt } = props;

  const handleAddCart = (e: FormEvent) => {
    e.preventDefault();

    if (!amountRef.current) return;

    const amount = +amountRef.current.value;
    dispatch(
      addCart({
        id,
        name,
        price,
        amount,
      }),
    );
  };

  return (
    <li className={styles.product}>
      <figure className={styles.product__img}>
        <img src={imgSrc} alt={imgAlt} />
      </figure>
      <div className={styles.product__text}>
        <h3 className={styles.product__name}>{name}</h3>
        <span>${price}</span>
      </div>
      <form className={styles.product__form} onSubmit={handleAddCart}>
        <label>
          Amount:{' '}
          <input
            className={styles.product__input}
            type="number"
            defaultValue="1"
            min="1"
            max="5"
            ref={amountRef}
          />
        </label>
        <button className={styles.product__btn}>Add</button>
      </form>
    </li>
  );
}

export default ProductItem;
