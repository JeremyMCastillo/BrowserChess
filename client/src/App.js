import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import logo from './logo.svg';
import Game from './components/Game';
import './App.css';
import 'bulma/css/bulma.css';

import Landing from './components/Landing';
import PlayerStart from './components/PlayerStart';
import PlayerJoin from './components/PlayerJoin';
import WaitingRoom from './components/WaitingRoom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/new-game-waiting-room'>
          <WaitingRoom />
        </Route>
        <PrivateRoute exact path='/game' component={Game} />{' '}
        {/* Need to make sure the endpoint is correct */}
      </Switch>
    </Router>
  );
}

export default App;
