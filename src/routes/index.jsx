import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/menu';
import Footer from '../Components/footer';

const Routes = () => {
  return(
    <div>
      <BrowserRouter>
        <div><Menu /></div>
        <div className='body'>
          <Switch>

          </Switch>
        </div>
        <div><Footer /></div>

      </BrowserRouter>
    </div> 
  )
}

export default Routes;