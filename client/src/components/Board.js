import React, { useState } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

const Board = (props) => {
  const renderSquare = (i, squareShade) => {
    return (
      <Cell
        piece={props.squares[i]}
        style={props.squares[i] ? props.squares[i].style : null}
        shade={squareShade}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const { board } = props;
  console.log(board);
  for (let i = 0; i < 8; i++) {
    const squareRows = [];
    for (let j = 0; j < 8; j++) {
      const squareShade =
        (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
          ? 'light-square'
          : 'dark-square';
      // squareRows.push(renderSquare(i * 8 + j, squareShade));
    }
    board.push(<div className='board-row'>{squareRows}</div>);
  }

  return <div>{board}</div>;
};

function isEven(num) {
  return num % 2 == 0;
}

const mapStateToProps = (state) => {
  let { board } = state.landing;

  return { board };
};

export default connect(mapStateToProps)(Board);
