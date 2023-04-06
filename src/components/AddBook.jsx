import React, { useState } from 'react';
import './Styles/AddBook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    const bookId = uuidv4();
    dispatch(addBook({ title, author, bookId }));
  };

  return (
    <div className="bookform">
      <h2 className="formHeader">ADD NEW BOOK</h2>
      <form onSubmit={formSubmit} className="formbook">
        <input type="text" placeholder="Book title" className="Lesson-Panel" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" className="Lesson-Pane2" value={author} onChange={(t) => setAuthor(t.target.value)} required />
        <button type="submit" className="addButton">Add Book</button>

      </form>
    </div>
  );
};

export default AddBook;
