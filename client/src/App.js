import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import Game from './components/Game';
import './App.css';
import 'bulma/css/bulma.css';

import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <PrivateRoute path='/game' component={Game} />{' '}
      </Switch>
    </Router>
  );
}

export default App;
