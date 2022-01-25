import { HomePage } from './home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

export const Routes = () => {

  return <Router>
    <Switch>
      <Route path="/" element={<HomePage />} />
    </Switch>
  </Router>
}
