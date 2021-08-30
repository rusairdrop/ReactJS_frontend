import {NavLink} from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink exact className='' to='/'>Home</NavLink></li>
          <li><NavLink className='' to='/note'>Note</NavLink></li>
          <li><NavLink className='' to='/create'>Create</NavLink></li>
          <li><NavLink className='' to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;