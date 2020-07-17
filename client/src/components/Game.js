import React, { useState, useEffect } from 'react';
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
  let [socket, setSocket] = useState(openSocket('/'));
  let { gameCode } = useParams();
  let history = useHistory();

  useEffect(() => {
    socket.emit('gameJoined', { gameCode });
    socket.on('gameJoined', () => {
      setStatus('Player joined the game');
      props.loadBoard(props.gameCode, props.player.name);
    });
    socket.on('gameDisconnected', () => {
      setStatus('Player left the game');
      props.loadBoard(props.gameCode, props.player.name);
    });
    socket.on('pieceMoved', () => {
      setStatus('Player moved a piece');
      props.loadBoard(props.gameCode, props.player.name);
    });
  }, []);

  const movePiece = (pieceClass, pieceType, cell) => {
    socket.emit('movePiece', { pieceClass, pieceType, cell });
  };

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
          <Board movePieceCallback={movePiece} />
        </div>
        <div className='column is-narrow'>
          <Graveyard />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { board, player, gameCode } = state.landing;

  return { board, player, gameCode };
};

export default connect(mapStateToProps, {
  loadBoard
})(Game);
