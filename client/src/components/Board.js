import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Cell from './Cell';
import { loadBoard } from '../actions/LandingActions';
import '../index.css';
import range from 'lodash/range';
import reverse from 'lodash/reverse';

const Board = (props) => {
  let { gameCode } = useParams();
  if (!props.board.matrix && gameCode) {
    props.loadBoard(gameCode);
  }

  const renderCell = (cell) => {
    const { x, y } = cell;
    return (
      <Cell
        coordinates={{ x, y }}
        piece={cell.piece}
        onClick={() => props.onClick()}
      />
    );
  };

  const board = [];
  if (props.board.matrix) {
    let yValues = range(8);
    if (props.player.color === 'black') {
      console.log('Reversing board');
      yValues = reverse(yValues);
    }
    console.log(yValues);

    yValues.forEach((y) => {
      let row = [];
      for (let x = 0; x < 8; x++) {
        row.push(renderCell(props.board.matrix[x][y]));
      }
      board.push(<div className='columns is-mobile'>{row}</div>);
    });
  }

  return (
    <div id='board' className='mt-6'>
      {board}
    </div>
  );
};

const mapStateToProps = (state) => {
  let { board, player } = state.landing;

  return { board, player };
};

export default connect(mapStateToProps, { loadBoard })(Board);
