import React from 'react';

import { useSelector } from 'react-redux';
import Bookcard from './Bookcard';
import AddBook from './AddBook';

const Booklist = () => {
  const { bookslibrary } = useSelector((state) => state.book);

  return (
    <div>
      { bookslibrary.map((books) => (

        <Bookcard key={books.id} book={books} />
      ))}
      <AddBook />
    </div>
  );
};

export default Booklist;
