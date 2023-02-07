import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Cart = {
  id: number;
  name: string;
  price: number;
  amount: number;
};

type CartState = {
  carts: Cart[];
  totalAmount: number;
  total: number;
};

const initialState: CartState = {
  carts: [],
  totalAmount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<Cart>) {
      state.totalAmount += action.payload.amount;
      state.total += action.payload.price * action.payload.amount;

      const existingCart = state.carts.findIndex(({ id }) => id === action.payload.id);

      if (existingCart === -1) {
        state.carts.push(action.payload);
        return;
      }

      state.carts[existingCart].amount += action.payload.amount;
    },

    increaseAmount(state, action: PayloadAction<{ id: number }>) {
      const currentCart = state.carts.findIndex(({ id }) => id === action.payload.id);

      state.carts[currentCart].amount++;
      state.totalAmount++;
      state.total += state.carts[currentCart].price;
    },

    decreaseAmount(state, action: PayloadAction<{ id: number }>) {
      const currentCart = state.carts.findIndex(({ id }) => id === action.payload.id);

      state.totalAmount--;
      state.total -= state.carts[currentCart].price;

      if (state.carts[currentCart].amount === 1) {
        state.carts.splice(currentCart, 1);
        return;
      }

      state.carts[currentCart].amount--;
    },
  },
});

export const { addCart, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
