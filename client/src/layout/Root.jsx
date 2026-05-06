import React from 'react';
import Navbar from './../component/Navbar/Navbar';
import Outlet from 'react-router-dom'
const Root = () => {
  return (
    <div>
      <h1>My App</h1>
      <Navbar></Navbar>
      <Outlet/>

    </div>
  );
};

export default Root;