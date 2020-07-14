import React from 'react';
import '../index.css';

export default function Square(props) {
  // console.log("This is from Cell.js: " , props)
  let pieceClass = props.piece ? props.piece.color : '';
  let pieceType = props.piece ? props.piece.type: '';
  return (
    <button className={`square piece column ${pieceClass} ${pieceType}`}>
      {props.piece ? props.piece.type : ''}
    </button>
  );
}
