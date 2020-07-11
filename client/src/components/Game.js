import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import '../index.css';
import Board from './Board';
import { Graveyard } from './Graveyard';

const Game = (props) => {
  let { gameCode } = useParams();
  let history = useHistory();
  const socket = openSocket('/');
  socket.emit('gameJoined', { gameCode });

  console.log(gameCode);

  if (!props.board.game_code) {
    history.push('/');
  }

  return (
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
  );
};

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps)(Game);
