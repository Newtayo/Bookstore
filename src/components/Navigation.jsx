import React from 'react';
import './Styles/Navigation.css';
import profile from './Asset/profile.JPG';

const Navigation = () => (
  <div className="panel-bg">
    <a className="Bookstore-CMS Text-Style-3" href="/">Bookstore CMS </a>
    <a className="BOOKS" href="/">BOOKS</a>
    <a className="CATEGORIES" href="category">CATEGORIES </a>
    <a className="Oval" href="/">
      <img src={profile} className="image" alt="profile" />
      {' '}
    </a>
  </div>
);

export default Navigation;
