import { createSlice } from '@reduxjs/toolkit';

import IData from '../interfaces/DataInterface';

const initialState: IData[] = [];

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: { cartState: initialState },
  reducers: {
    addToCart: (state, action) => {
      state.cartState.push(action.payload);
    },

    clearCart: (state, action) => {
      state.cartState = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
