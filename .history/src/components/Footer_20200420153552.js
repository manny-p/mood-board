import React from "react";

const Footer = () => {
  return (
    <div className='ui raised segment'>
      <div className='ui three item menu'>
        <a href='#' onClick={foo} className='active item'>
          Search
        </a>
        <a href='#' className='item'>
          Boards
        </a>
        <a href='#' className='item'>
          Library
        </a>
      </div>
    </div>
  );
};

export default Footer;
