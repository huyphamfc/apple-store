import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartItem.module.scss';
import { increaseAmount, decreaseAmount } from 'store';

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

function CartItem(props: CartItemProps) {
  const dispatch = useDispatch();

  const { id, name, price, amount } = props;

  const handleIncreaseAmount = () => {
    dispatch(increaseAmount({ id }));
  };

  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount({ id }));
  };

  return (
    <li className={styles.cart}>
      <span>{name}</span>
      <div className={styles.cart__amount}>
        <button className={styles.cart__btn} onClick={handleDecreaseAmount}>
          -
        </button>
        <span className={styles.cart__number}>{amount}</span>
        <button className={styles.cart__btn} onClick={handleIncreaseAmount}>
          +
        </button>
      </div>
      <span className={styles.cart__price}>${price * amount}</span>
    </li>
  );
}

export default CartItem;
