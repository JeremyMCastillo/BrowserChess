import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../index.css';
import Board from './Board';
import Graveyard from './Graveyard';

const Game = (props) => {
  let { gameCode } = useParams();
  let history = useHistory();

  console.log(gameCode);

  if (!props.board.game_code) {
    history.push('/');
  }

  return (
    <div className='gameboard'>
      <Board />
    </div>
  );
};

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps)(Game);
