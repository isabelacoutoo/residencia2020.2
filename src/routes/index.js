import React from 'react';

import { Switch, Route } from 'react-router-dom';

import login from '../screens/login';
import home from '../screens/home';
import cameras from '../screens/cameras';
import dashboard from '../screens/dashboard'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={login} />
    <Route path="/home" exact component={home} />
    <Route path="/cameras" exact component={cameras} />
    <Route path="/dashboard" exact component={dashboard} />
  </Switch>
);
export default Routes;
