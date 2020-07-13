import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Cell from './Cell';
import { loadBoard } from '../actions/LandingActions';

const Board = (props) => {
  let { gameCode } = useParams();
  if (!props.board.matrix && gameCode) {
    props.loadBoard(gameCode);
  }

  const renderCell = (cell) => {
    return <Cell piece={cell.piece} onClick={() => props.onClick()} />;
  };

  const board = [];
  if (props.board.matrix) {
    for (let y = 7; y >= 0; y--) {
      let row = [];
      for (let x = 0; x < 8; x++) {
        console.log('MATRIX');
        console.log(props.board.matrix[x][y]);
        row.push(renderCell(props.board.matrix[x][y]));
      }
      board.push(<div className='columns'>{row}</div>);
    }
  }

  return <div>{board}</div>;
};

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps, { loadBoard })(Board);
