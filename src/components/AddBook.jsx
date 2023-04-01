import React from 'react';
import './Styles/AddBook.css';

const AddBook = () => (
  <div className="bookform">
    <h2 className="formHeader">ADD NEW BOOK</h2>
    <form className="formbook">
      <input type="text" placeholder="Book title" className="Lesson-Panel" required />
      <input type="text" placeholder="Author" className="Lesson-Pane2" required />
      <input type="button" value="Add Book" className="addButton" />

    </form>
  </div>
);

export default AddBook;
