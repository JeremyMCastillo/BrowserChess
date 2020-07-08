import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { onRegisterFieldUpdate } from '../actions/LandingActions';
import PlayerStart from './PlayerStart';

function PlayerJoin(props) {
  return (
    <div className='PlayerJoin'>
      <PlayerStart />
      <TextField
        value={props.gameCode}
        onChange={(event) =>
          props.onRegisterFieldUpdate({
            prop: 'gameCode',
            value: event.target.value
          })
        }
        label='Game Code'
        type='text'
        name='gameCode'
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  let { username, gameCode } = state.landing;

  return { username, gameCode };
};

export default connect(mapStateToProps, { onRegisterFieldUpdate })(PlayerJoin);
