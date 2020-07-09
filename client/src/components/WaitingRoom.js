import React, { Component } from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class WaitingRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { waiting: true };
    this.registerSocket(this);
  }

  registerSocket(component) {
    // Waiting for player 2 to join
    console.log('REGISTERING SOCKET');
    const socket = openSocket('/');
    socket.on('gameJoined', () => {
      console.log('player 2 joined');
      component.setState({ waiting: false });
    });
    let { player_1 } = this.props;
    let gameCode = this.props.board.game_code;
    socket.emit('gameJoined', { player_1, gameCode });
  }

  render() {
    if (!this.state.waiting || !this.props.player_1) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <Typography component='h1'>
          Welcome {this.props.player_1}! Waiting for player 2.
          <br /> Please give them code {this.props.board.game_code}
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { board, player_1 } = state.landing;

  return { board, player_1 };
};

export default connect(mapStateToProps)(WaitingRoom);
