import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/products'}>About</Link>
      </nav>
    </div>
  );
};

export default Navbar;