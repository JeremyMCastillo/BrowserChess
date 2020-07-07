import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from '@material-ui/core';
import { onRegisterFieldUpdate } from '../actions/LandingActions';
import PlayerStart from './PlayerStart';

function PlayerJoin(props) {
  return (
    <form className='PlayerJoin'>
      <PlayerStart />
      <Input
        value={props.gameCode}
        onChange={(event) =>
          props.onRegisterFieldUpdate({
            prop: 'gameCode',
            value: event.target.value,
          })
        }
        type='text'
        name='gameCode'
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  let { username, gameCode } = state.landing;

  return { username, gameCode };
};

export default connect(mapStateToProps, { onRegisterFieldUpdate })(PlayerJoin);
