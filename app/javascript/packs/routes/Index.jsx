import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListingComponent from '../components/ListingComponent/ListingComponent';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ListingComponent} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
