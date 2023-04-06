import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookslibrary: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  bookTitle: '',
  author: '',
};

const booksSlice = createSlice({
  name: 'library',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.bookslibrary.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state, bookslibrary: state.bookslibrary.filter((book) => book.item_id !== action.payload),

    }),

  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;