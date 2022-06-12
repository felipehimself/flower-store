import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import dataSlice from '../slices/dataSlice';
import modalSlice from '../slices/modalSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
