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
        key={`${x}-${y}`}
        movePieceCallback={props.movePieceCallback}
        coordinates={{ x, y }}
        cell={cell}
        board={props.board}
        player={props.player}
        onClick={() => props.onClick()}
      />
    );
  };

  const board = [];
  if (props.board.matrix) {
    let yValues = range(8);
    let xValues = range(8);
    if (props.player.color === 'black') {
      console.log('Reversing board x');
      xValues = reverse(xValues);
    } else {
      console.log('Reversing board y');
      yValues = reverse(yValues);
    }
    console.log(yValues);

    yValues.forEach((y) => {
      let row = [];
      xValues.forEach((x) => {
        row.push(renderCell(props.board.matrix[x][y]));
      });
      board.push(
        <div key={`row${y}`} className='columns is-mobile'>
          {row}
        </div>
      );
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
