import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import knightLogo from '../images/knight black.svg';
import PlayerStart from './PlayerStart';
import PlayerJoin from './PlayerJoin';
import { createNewGame, joinGame } from '../actions/LandingActions';
import { useHistory } from 'react-router-dom';
import openSocket from 'socket.io-client';

const Landing = (props) => {
  const [state, setState] = useState({
    isNewGameFormShown: false,
    isJoinGameFormShown: false
  });

  let history = useHistory();

  if (props.player_1 && !props.player_2) {
    localStorage.setItem('gameCode', props.board.game_code);
    history.push(`/game/${props.board.game_code}`);
  }

  const onNewGamePress = () => {
    setState({
      ...state,
      isJoinGameFormShown: false,
      isNewGameFormShown: !state.isNewGameFormShown
    });
  };

  const onJoinGamePress = () => {
    setState({
      ...state,
      isNewGameFormShown: false,
      isJoinGameFormShown: !state.isJoinGameFormShown
    });
  };

  const onStartGame = () => {
    setState({ ...state, loading: true });
    if (state.isNewGameFormShown) {
      props.createNewGame(props.username);
    } else if (state.isJoinGameFormShown) {
      props.joinGame(props.username, props.gameCode);
    } else {
      setState({ ...state, loading: false });
    }
  };

  const renderNewGameForm = () => {
    if (state.isNewGameFormShown) {
      return (
        <div className='columns'>
          <PlayerStart className='columns' />
        </div>
      );
    }
  };

  const renderJoinGameForm = () => {
    if (state.isJoinGameFormShown) {
      return (
        <div className='columns'>
          <PlayerJoin />
        </div>
      );
    }
  };

  const renderSubmitButton = () => {
    if (state.isNewGameFormShown || state.isJoinGameFormShown) {
      return (
        <div className='columns mt-1'>
          <Button
            disabled={props.loading}
            className='column'
            variant='outlined'
            color='primary'
            onClick={onStartGame}
          >
            Submit
          </Button>
        </div>
      );
    }
  };

  const renderErrorMessage = () => {
    if (props.error) {
      return <Alert severity='error'>{props.error}</Alert>;
    }
  };

  return (
    <div>
      {renderErrorMessage()}
      <div className='App-header'>
        <Typography component='h1'>
          Browser Chess <img className='piece' src={knightLogo} />
        </Typography>
        <div className='columns'>
          <div className='column'>
            <Button
              onClick={onNewGamePress}
              variant='contained'
              color='primary'
              className='button'
              disabled={props.loading}
            >
              Create New Game
            </Button>
          </div>
          <div className='column'>
            <Button
              onClick={onJoinGamePress}
              variant='contained'
              color='primary'
              className='button'
              disabled={props.loading}
            >
              Join Game
            </Button>
          </div>
        </div>
        {renderNewGameForm()}
        {renderJoinGameForm()}
        {renderSubmitButton()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let {
    username,
    gameCode,
    loading,
    error,
    board,
    player_1,
    player_2
  } = state.landing;

  return { username, gameCode, loading, error, board, player_1, player_2 };
};

export default connect(mapStateToProps, {
  createNewGame,
  joinGame
})(Landing);
