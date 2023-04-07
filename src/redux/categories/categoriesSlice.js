import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, status: 'Page is under Construction' }),

  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice;
