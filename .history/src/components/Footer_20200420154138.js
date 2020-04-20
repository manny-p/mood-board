import React from "react";

const Footer = () => {
  return (
    <div className='ui raised segment'>
      <div className='ui three item menu'>
        <a href='http://localhost:3000/' className='active item'>
          Search
        </a>
        <a href='http://localhost:3000/' className='item'>
          Boards
        </a>
        <a href='http://localhost:3000/' className='item'>
          Library
        </a>
      </div>
    </div>
  );
};

export default Footer;
