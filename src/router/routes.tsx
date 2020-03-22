import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/home';
import PrivateRoute from './privateRoute';

function Routes(): JSX.Element {
  return (
    <Switch>
      <PrivateRoute path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
