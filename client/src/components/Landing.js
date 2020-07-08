import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import knightLogo from '../images/knight black.svg';
import PlayerStart from './PlayerStart';
import PlayerJoin from './PlayerJoin';
import { createNewGame, joinGame } from '../actions/LandingActions';

class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNewGameFormShown: false,
      isJoinGameFormShown: false
    };

    this.onNewGamePress = this.onNewGamePress.bind(this);
    this.onJoinGamePress = this.onJoinGamePress.bind(this);
    this.onStartGame = this.onStartGame.bind(this);
  }

  onNewGamePress() {
    this.setState({
      ...this.state,
      isJoinGameFormShown: false,
      isNewGameFormShown: !this.state.isNewGameFormShown
    });
  }

  onJoinGamePress() {
    this.setState({
      ...this.state,
      isNewGameFormShown: false,
      isJoinGameFormShown: !this.state.isJoinGameFormShown
    });
  }

  onStartGame() {
    this.setState({ ...this.state, loading: true });
    if (this.state.isNewGameFormShown) {
      this.props.createNewGame(this.props.username);
    } else if (this.state.isJoinGameFormShown) {
      this.props.joinGame(this.props.username, this.props.gameCode);
    } else {
      this.setState({ ...this.state, loading: false });
    }
  }

  renderNewGameForm() {
    if (this.state.isNewGameFormShown) {
      return (
        <div className='columns'>
          <PlayerStart className='columns' />
        </div>
      );
    }
  }

  renderJoinGameForm() {
    if (this.state.isJoinGameFormShown) {
      return (
        <div className='columns'>
          <PlayerJoin />
        </div>
      );
    }
  }

  renderSubmitButton() {
    if (this.state.isNewGameFormShown || this.state.isJoinGameFormShown) {
      return (
        <div className='columns mt-1'>
          <Button
            disabled={this.props.loading}
            className='column'
            variant='outlined'
            color='primary'
            onClick={this.onStartGame}
          >
            Submit
          </Button>
        </div>
      );
    }
  }

  renderErrorMessage() {
    if (this.props.error) {
      return <Alert severity='error'>{this.props.error}</Alert>;
    }
  }

  render() {
    return (
      <div>
        {this.renderErrorMessage()}
        <div className='App-header'>
          <Typography component='h1'>
            Browser Chess <img className='piece' src={knightLogo} />
          </Typography>
          <div className='columns'>
            <div className='column'>
              <Button
                onClick={this.onNewGamePress}
                variant='contained'
                color='primary'
                className='button'
                disabled={this.props.loading}
              >
                Create New Game
              </Button>
            </div>
            <div className='column'>
              <Button
                onClick={this.onJoinGamePress}
                variant='contained'
                color='primary'
                className='button'
                disabled={this.props.loading}
              >
                Join Game
              </Button>
            </div>
          </div>
          {this.renderNewGameForm()}
          {this.renderJoinGameForm()}
          {this.renderSubmitButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { username, gameCode, loading, error } = state.landing;

  return { username, gameCode, loading, error };
};

export default connect(mapStateToProps, {
  createNewGame,
  joinGame
})(Landing);
