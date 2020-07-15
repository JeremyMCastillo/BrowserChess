import React, { useState } from 'react';
import '../index.css';


export default function Square(props) {


  let pieceClass = props.piece ? props.piece.color : '';
  let pieceType = props.piece ? props.piece.type: '';

  const [selectedPiece, setSelectedPiece] = useState({
    pieceClass,
    pieceType,
  });


  const selectPiece = e => {
    e.preventDefault();
    setSelectedPiece({
      ...selectedPiece,
      pieceClass,
      pieceType,
    });
    console.log(selectedPiece)
  };

  return (
    <button className={`square piece column`} 
    onClick={selectPiece}>
      {
      props.piece 
      ? props.piece.type 
      : null}
    </button>
  );
};

