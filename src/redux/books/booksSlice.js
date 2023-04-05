import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookslibrary: [],
  bookTitle: '',
  author: '',
};

const booksSlice = createSlice({
  name: 'library',
  initialState,

  reducers: {
    addBook: (state, { payload: { bookTitle, author } }) => {
      state.books.push({ bookTitle, author });
    },
    removeBook: () => { },
  },

});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
