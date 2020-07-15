import React, { useState } from 'react';
import '../index.css';




export default function Square(props) {

  const [selectedPiece, setSelectedPiece] = useState({});

  let pieceClass = props.piece ? props.piece.color : '';
  let pieceType = props.piece ? props.piece.type: '';
  let active = false;

  const togglePiece = e => {
    e.preventDefault();
    setSelectedPiece({
      ...selectedPiece,
      pieceClass,
      pieceType,
      active: !selectedPiece.active
    });
    console.log(selectedPiece)
  };


  // console.log("This is from Cell.js: " , props)

  return (
    <button className={
    active 
    ? `square piece column ${selectedPiece.pieceClass} ${selectedPiece.pieceType}` 
    : `square piece column`} 
    onClick={togglePiece}>
      {
      props.piece 
      ? props.piece.type 
      : selectedPiece.type}
    </button>
  );
}
