import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className='flex border justify-around'>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/products'}>Products</Link>
      </nav>
    </div>
  );
};

export default Navbar;