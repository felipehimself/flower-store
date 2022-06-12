import { createSlice } from '@reduxjs/toolkit';

import data from '../utils/data';

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { data: data },
  reducers: {},
});

// export const { dataSlice } = dataSlice.actions;

export default dataSlice.reducer;
