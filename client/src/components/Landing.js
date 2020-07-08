import React from 'react';
import { Typography, ButtonGroup, Button } from '@material-ui/core';
import knightLogo from '../images/knight black.svg';
import Board from './Board';

function Landing() {
  return (
    <div class='App-header'>
      <Typography variant='title' component='h1'>
        Browser Chess <img class='piece' src={knightLogo} />
      </Typography>
      <div class='columns'>
        <div class='column'>
          <Button variant='contained' class='button'>
            Create New Game
          </Button>
        </div>
        <div class='column'>
          <Button variant='contained' class='button'>
            Join Game
          </Button>
          <Board />
        </div>
      </div>
    </div>
  );
}

export default Landing;
