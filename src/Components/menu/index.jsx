import './styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  
  return(
    <>
    <nav>
      <ul className='menu'>
        <li className="logo">
          <a href="#"><img src="../../../public/images/Margik_Logo_Full_Color.png"></img></a>
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
    </nav>
    </>
  )
}

export default Menu;