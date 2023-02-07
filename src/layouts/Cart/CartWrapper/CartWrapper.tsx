import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CartWrapper.module.scss';
import CartItem from '../CartItem';
import { RootState } from 'store';

function CartWrapper() {
  const { carts, total } = useSelector((state: RootState) => state.cart);

  let content: JSX.Element;

  if (carts.length === 0) {
    content = <p className={styles.cart__empty}>Your cart is empty.</p>;
  } else {
    content = (
      <>
        <ul className={styles.cart__items}>
          {carts.map((cart) => (
            <CartItem key={cart.id} {...cart} />
          ))}
        </ul>
        <div className={styles.cart__total}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </>
    );
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>Cart</h2>
      <div className={styles.cart__content}>{content}</div>
    </div>
  );
}

export default CartWrapper;
