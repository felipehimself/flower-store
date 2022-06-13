import { createSlice } from '@reduxjs/toolkit';

export const modalCheckoutSlice = createSlice({
  name: 'modalCheckoutSlice',
  initialState: { modalCheckoutState: false },
  reducers: {
    toggleCheckoutModal: (state, action) => {
      state.modalCheckoutState = action.payload;
    },
  },
});

export const { toggleCheckoutModal } = modalCheckoutSlice.actions;

export default modalCheckoutSlice.reducer;
