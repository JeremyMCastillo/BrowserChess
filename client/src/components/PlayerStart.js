import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from '@material-ui/core';
import { onRegisterFieldUpdate } from '../actions/LandingActions';

function PlayerStart(props) {
  console.log(props);
  return (
    <form className='PlayerStart'>
      <Input
        value={props.username}
        onChange={(event) =>
          props.onRegisterFieldUpdate({
            prop: 'username',
            value: event.target.value,
          })
        }
        type='text'
        name='username'
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  let { username } = state.landing;

  return { username };
};

export default connect(mapStateToProps, {
  onRegisterFieldUpdate,
})(PlayerStart);
