import { HomePage } from './home';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { enableLogging } from 'mobx-logger';
import { CharacterPage } from './character';

export const Routes = () => {
  enableLogging();

  return <Router>
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:idOfPerson" element={<CharacterPage />} />
    </Switch>
  </Router>
}
