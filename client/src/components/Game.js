import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import '../index.css';
import Board from './Board';
import { Graveyard } from './Graveyard';
import { loadBoard } from '../actions/LandingActions';

const Game = (props) => {
  let [status, setStatus] = useState('Joining the game.');
  let { gameCode } = useParams();
  let history = useHistory();
  const socket = openSocket('/');
  socket.emit('gameJoined', { gameCode });
  socket.on('gameJoined', () => {
    setStatus('Player joined the game');
    props.loadBoard();
  });

  console.log(gameCode);

  if (!props.board.game_code) {
    history.push('/');
  }

  const renderAlert = () => {
    if (status) {
      return <Alert severity='info'>{status}</Alert>;
    }
  };

  return (
    <div>
      {renderAlert()}
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
    </div>
  );
};

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps)(Game);
