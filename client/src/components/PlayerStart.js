import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { onRegisterFieldUpdate } from '../actions/LandingActions';

function PlayerStart(props) {
  console.log(props);
  return (
    <div className='PlayerStart'>
      <TextField
        value={props.username}
        onChange={(event) =>
          props.onRegisterFieldUpdate({
            prop: 'username',
            value: event.target.value
          })
        }
        required
        label='Username'
        type='text'
        name='username'
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  let { username } = state.landing;

  return { username };
};

export default connect(mapStateToProps, {
  onRegisterFieldUpdate
})(PlayerStart);
