import './styles.css';
import React from 'react';
import menu_logo from './img/menu_logo.png';

import { Link } from 'react-router-dom';

function Menu() {
  
  return(
    <>
      <ul className='menu'>
        <li className="logo">
          <a href="#"><img src={menu_logo}></img></a>
        </li>
        <li className='menu__item'>
          <Link to='/'>Home</Link>
        </li>

        <li className='item.button'>
          <Link to='/products'>Products</Link>
        </li>

        <li className='item.button'>
          <Link to='/contact'>Contact</Link>
        </li>

        <li className='item.button'>
          <Link to='/terms'>Terms & Conditions</Link>
        </li>

      </ul>  
    </>
  )
}

export default Menu;