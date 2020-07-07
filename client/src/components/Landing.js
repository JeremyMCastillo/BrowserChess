import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import knightLogo from '../images/knight black.svg';
import PlayerStart from './PlayerStart';
import PlayerJoin from './PlayerJoin';

class Landing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false,
      isNewGameFormShown: false,
      isJoinGameFormShown: false
    };

    this.onNewGamePress = this.onNewGamePress.bind(this);
    this.onJoinGamePress = this.onJoinGamePress.bind(this);
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

  renderNewGameForm() {
    if (this.state.isNewGameFormShown) {
      return <PlayerStart />;
    }
  }

  renderJoinGameForm() {
    if (this.state.isJoinGameFormShown) {
      return <PlayerJoin />;
    }
  }

  render() {
    return (
      <div className='App-header'>
        <Typography component='h1'>
          Browser Chess <img className='piece' src={knightLogo} />
        </Typography>
        <div className='columns'>
          <div className='column'>
            <Button
              onClick={this.onNewGamePress}
              variant='contained'
              className='button'
            >
              Create New Game
            </Button>
          </div>
          <div className='column'>
            <Button
              onClick={this.onJoinGamePress}
              variant='contained'
              className='button'
            >
              Join Game
            </Button>
          </div>
        </div>
        {this.renderNewGameForm()}
        {this.renderJoinGameForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { username } = state.landing;

  return { username };
};

export default connect(mapStateToProps)(Landing);
