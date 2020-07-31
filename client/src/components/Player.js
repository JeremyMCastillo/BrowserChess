import React from 'react';
import { Typography, Card } from '@material-ui/core';

const Player = (props) => {
  const playerName = props.player ? props.player.name : 'No Player';
  const turnMessage =
    props.board &&
    props.player &&
    props.board.player_1 &&
    props.board.player_2 &&
    props.board.turn === props.player.color
      ? 'Your Turn'
      : '';

  return (
    <div className='container'>
      <Card className='card'>
        <div className='card-header'>
          <Typography
            component='h4'
            variant='h4'
            className='card-header-title has-text-centered is-block'
          >
            {playerName}
            <Typography variant='subtitle1'>{turnMessage}</Typography>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Player;
