import React from "react";

const Footer = () => {
  return (
    <div className='ui raised segment'>
      <div className='ui three item menu'>
        <a href='javascript:void(0)' onClick={foo} className='active item'>
          Search
        </a>
        <a href='javascript:void(0)' onClick={foo} className='item'>
          Boards
        </a>
        <a href='javascript:void(0)' onClick={foo} className='item'>
          Library
        </a>
      </div>
    </div>
  );
};

export default Footer;
