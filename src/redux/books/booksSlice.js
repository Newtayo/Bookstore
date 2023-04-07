import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ggsELnFrfDZjNmGlhtjO/books';

const initialState = {

  bookslibrary: [
  ],
  isLoading: false,
  error: false,
  success: false,
};

export const getBooks = createAsyncThunk('booklibrary/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const removeBooks = createAsyncThunk('books/removeBook',
  async (bookid) => {
    try {
      const response = await axios.delete(`${url}/${bookid}`);
      return response.data;
    } catch (error) {
      return error;
    }
  });
export const addingBook = createAsyncThunk(
  'books/addBook',
  async ({ bookId, title, author }) => {
    try {
      const { data } = await axios.post(url, {
        item_id: bookId,
        title,
        author,
        category: 'Romance',
      });
      return data;
    } catch (error) {
      return error;
    }
  },
);
const booksSlice = createSlice({
  name: 'library',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const eachBook = action.payload;
        const bookContainer = [];
        Object.keys(eachBook).forEach((details) => bookContainer.push({
          item_id: details,
          title: eachBook[details][0].title,
          author: eachBook[details][0].author,
          category: eachBook[details][0].category,
        }));

        return {
          ...state,
          bookslibrary: bookContainer,
          isLoading: false,
          success: true,
        };
      }).addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(removeBooks.pending, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(removeBooks.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(removeBooks.rejected, (state) => ({
        ...state,
        success: false,
        error: false,
      }))
      .addCase(addingBook.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(addingBook.rejected, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(addingBook.pending, (state) => ({
        ...state,
        success: false,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
