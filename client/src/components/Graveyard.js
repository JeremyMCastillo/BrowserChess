import React, { useEffect } from 'react';
import '../index.css';

//TODO: add status to pieces

export const Graveyard = (props) => {
  let dead = [];
  let pieceClass = props.piece ? props.piece.color: '';
  let pieceType = props.piece ? props.piece.type: '';
  // let pieceStatus = props.piece ? props.piece.status: '';
  

  // useEffect() = props = {
  //   if (pieceStatus = 'dead') {
  //     dead.push(pieceClass, pieceType);
  //   }
  // };

  return <div className="graveyard">{dead}</div>;
};
