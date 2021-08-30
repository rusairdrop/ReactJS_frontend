import {NavLink} from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>ShareNotes</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink className='header__link' exact to='/'>Home</NavLink></li>
          <li><NavLink className='header__link' to='/note'>Note</NavLink></li>
          <li><NavLink className='header__link' to='/create'>Create</NavLink></li>
          <li><NavLink className='header__link' to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;