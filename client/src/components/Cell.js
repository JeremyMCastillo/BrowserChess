import React, { useState } from 'react';
import '../index.css';

export default function Square(props) {
  let pieceClass = props.piece ? props.piece.color : '';
  let pieceType = props.piece ? props.piece.type : '';
  let { x, y } = props.coordinates;

  const [selectedPiece, setSelectedPiece] = useState({
    pieceClass: '',
    pieceType: '',
    x: '',
    y: ''
  });

  const selectPiece = (e) => {
    e.preventDefault();
    setSelectedPiece({
      ...selectedPiece,
      pieceClass,
      pieceType,
      x,
      y
    });
    props.movePieceCallback(selectedPiece.pieceClass, selectedPiece.pieceType);
    console.log(selectedPiece);
  };

  return (
    <button className={`square piece column`} onClick={selectPiece}>
      {props.piece ? props.piece.type : null}
    </button>
  );
}

const mapStateToProps = (state) => {
  let { selectedPiece } = state.gameState;

  return { selectedPiece };
};
