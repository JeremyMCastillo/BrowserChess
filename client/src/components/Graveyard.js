import React from "react";
import "../index.css";

import Cell from "./Cell";

//TODO: add status to pieces

export const Graveyard = (props) => {
  let dead = [];
  console.log("GRAVEYARD");
  console.log(props.graveyard);

  props.graveyard.forEach((piece) => {
    let pieceType = piece.type;
    let pieceColor = piece.color;
    dead.push(
      <li>
        <div className={`square piece column ${pieceType} ${pieceColor}`}></div>
      </li>
    );
  });

  return (
    <div className="graveyard">
      <ul>{dead}</ul>
    </div>
  );
};
