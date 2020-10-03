import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home/';
import Details from '../pages/Details';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/characters/:id" component={Details} />
    </BrowserRouter>
  )
}

export default Routes;