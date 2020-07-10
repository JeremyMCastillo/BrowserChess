import React from 'react';
import { Route, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import Board from './Board';
import { Graveyard } from './Graveyard';

const Game = (props) => {
  let { gameCode } = useParams();
  let history = useHistory();
  let match = useRouteMatch();

  console.log(gameCode);

  if (!props.board.game_code) {
    history.push('/');
  }

  return (
    <Route path={`${match.path}/:gameCode`} className='gameboard'>
      <div className='columns'>
        <div className='column is-narrow'>
          <Graveyard />
        </div>
        <div className='column'>
          <Board />
        </div>
        <div className='column is-narrow'>
          <Graveyard />
        </div>
      </div>
    </Route>
  );
};

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps)(Game);
