import React from 'react';
import './styles.css';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/menu';
import Footer from '../Components/footer';
import Home from '../Pages/home'

const Routes = () => {
  return(
    <div className='container'>
      <BrowserRouter>
        <div className='menu'><Menu /></div>
        <div className='body'>
          <Switch>
          <Route path="/" element={<Home />} />
          </Switch>
        </div>
        <div className='footer'><Footer /></div>

      </BrowserRouter>
    </div> 
  )
}

export default Routes;