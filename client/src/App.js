import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import Landing from './components/Landing';
import PlayerStart from './components/PlayerStart';
import PlayerJoin from './components/PlayerJoin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
        <Route path='/new-game'>
          <PlayerStart />
        </Route>
        <Route path='/join-game'>
          <PlayerJoin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
