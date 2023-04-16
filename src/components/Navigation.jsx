import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Navigation.css';
import profile from './Asset/profile.JPG';

const Navigation = () => (
  <div className="panel-bg">
    <a className="Bookstore-CMS Text-Style-3" href="/">Bookstore CMS </a>
    <NavLink className="BOOKS" to="/">BOOKS</NavLink>
    <NavLink className="CATEGORIES" to="/category/">CATEGORIES </NavLink>
    <a className="Oval" href="/">
      <img src={profile} className="image" alt="profile" />
      {' '}
    </a>
  </div>
);

export default Navigation;
