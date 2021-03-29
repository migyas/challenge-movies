import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
