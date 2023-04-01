import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Bookcard from './Bookcard';
import AddBook from './AddBook';

const Booklist = () => {
  const booklibrary = [{
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percent: '60%',

  }, {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percent: '60%',

  }];

  return (
    <div>
      { booklibrary.map((books) => (

        <Bookcard key={books.id} book={books} />
      ))}
      <AddBook />
    </div>
  );
};

export default Booklist;
