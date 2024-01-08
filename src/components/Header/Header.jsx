import React from 'react';
import { NavLink } from 'react-router-dom';

const Header=()=> {
  return (
    <header>
      <nav>
        <ul
        style={{
          display:'flex',
          gap:30,
          listStyleType:"none",
          
        }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
