import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './home';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  );
};
