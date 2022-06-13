import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import dataSlice from '../slices/dataSlice';
import modalSlice from '../slices/modalCartSlice';
import modalCheckoutSlice from '../slices/modalCheckoutSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
    modal: modalSlice,
    modalCheckout: modalCheckoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
