import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Netflix-Logo.wine.png';
import './Header.scss';
import { ImSearch } from 'react-icons/im';

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Netflix Logo" />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/myList">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
}

export default Header;
