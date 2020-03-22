import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import NotFound from '../pages/404';
import PrivateRoute from './privateRoute';

function Routes(): JSX.Element {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
