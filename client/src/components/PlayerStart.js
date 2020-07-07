import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from '@material-ui/core';
import { onUsernameUpdate } from '../actions/LandingActions';

function PlayerStart(props) {
  console.log(props);
  return (
    <form className='PlayerStart'>
      <Input
        value={props.username}
        onChange={(value) => props.onUsernameUpdate(value)}
        type='text'
        name='username'
      />
      <Button>Submit</Button>
    </form>
  );
}

const mapStateToProps = (state) => {
  let { username } = state.landing;

  return { username };
};

export default connect(mapStateToProps, {
  onUsernameUpdate
})(PlayerStart);
