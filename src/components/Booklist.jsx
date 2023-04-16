import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bookcard from './Bookcard';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksSlice';

const Booklist = () => {
  const { bookslibrary, isLoading, success } = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  },
  [dispatch, success]);

  if (isLoading) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <div>
      { bookslibrary.map((books) => (

        <Bookcard key={books.item_id} book={books} />
      ))}
      <AddBook />
    </div>
  );
};

export default Booklist;
