import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import New from '../pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />

        <Route path="/login" component={Login} />

        <Route path="/" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
