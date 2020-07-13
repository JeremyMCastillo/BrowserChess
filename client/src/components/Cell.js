import React from 'react';
import '../index.css';

export default function Square(props) {
  let pieceClass = props.piece ? props.piece.color : '';
  return (
    <button className={`square piece column ${pieceClass}`}>
      {props.piece ? props.piece.type : ''}
    </button>
  );
}
