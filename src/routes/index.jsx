import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/menu';

const Routes = () => {
  return(
    <BrowserRouter>
      <Menu />
      <Switch>

      </Switch>
    
    </BrowserRouter>    
  )
}

export default Routes;