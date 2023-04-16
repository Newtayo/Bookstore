import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Bookcard.css';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

const Bookcard = ({ book }) => {
  const dispatch = useDispatch();

  Bookcard.propTypes = {
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,

  };

  return (
    <section className="booksection">
      <div className="bookdetails">
        <h3 className="category">{book.category}</h3>
        <h2 className="title">{book.title}</h2>
        <p className="author">{book.author}</p>
        <nav>
          <button type="submit" className="bookbtn">Comments</button>
          <button type="submit" className="bookbtn middle" onClick={() => dispatch(removeBooks(book.item_id))}>Remove</button>
          <button type="submit" className="bookbtn">Edit</button>
        </nav>
      </div>
      <div className="container">
        <div className="oval" />
        <div className="progress">
          <h3 className="percentage">70%</h3>
          <p className="complete">Completed</p>

        </div>
      </div>
      <div className="bookupdate">
        <h3 className="currentchapter">CURRENT CHAPTER</h3>
        <h4 className="chapter">Chapter 17</h4>
        <button type="submit" className="updateBtn">Update Progress</button>

      </div>
    </section>
  );
};

export default Bookcard;
