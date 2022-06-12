import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: { modalState: false },
  reducers: {
    toggleModal: (state, action) => {
      state.modalState = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
