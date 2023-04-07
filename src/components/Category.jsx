import React from 'react';
import './Styles/Category.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Category = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" className="statusbtn" onClick={() => (dispatch(checkStatus()))}> Check Status</button>
      <h2 className="display">{status}</h2>
    </div>
  );
};

export default Category;
