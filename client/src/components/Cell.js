import React from "react";
import { connect } from "react-redux";
import "../index.css";
import { selectPiece, registerValidMoves } from "../actions/GameActions";

const Cell = (props) => {
  let valid = false;

  if (
    props.validMoves.find(
      (move) => move.x === props.cell.x && move.y === props.cell.y
    )
  ) {
    valid = true;
  }

  const onCellClick = (e) => {
    e.preventDefault();

    if (
      props.board &&
      props.player &&
      props.board.turn !== props.player.color
    ) {
      alert("It is not your turn");
      return;
    }

    // First click selects a piece, second click selects the cell to move to.
    if (!props.selectedPiece.type) {
      if (props.cell.piece) {
        if (props.cell.piece.color === props.player.color) {
          console.log("Alright! Selecting a piece!");
          let selectedPiece = props.cell.piece ? props.cell.piece : {};

          props.selectPieceCallback(selectedPiece);
        } else {
          alert(
            "You don't expect to be able to move your opponent's pieces, do you?"
          );
        }
      } else {
        alert("Try clicking on one of your pieces to move it around.");
      }
    } else {
      if (props.cell.piece && props.cell.piece.color === props.player.color) {
        if (
          props.cell.piece.x == props.selectedPiece.x &&
          props.cell.piece.y == props.selectedPiece.y
        ) {
          console.log("Deselecting the piece!");
          props.selectPiece({});
          props.registerValidMoves([]);
        } else {
          console.log(
            "Alright, you decided to change your mind, and that's OK!"
          );
          let selectedPiece = props.cell.piece ? props.cell.piece : {};

          props.selectPieceCallback(selectedPiece);
        }
      } else if (valid) {
        console.log("Woohoo gonna move that piece!");

        props.movePieceCallback(props.selectedPiece, props.cell);
        // Clear selected piece
        props.selectPiece({});
      } else {
        alert("I hate to be THAT GUY, but there are rules, you know.");
      }
    }
  };

  let pieceType = "";
  let pieceColor = "";
  if (props.cell.piece) {
    pieceType = props.cell.piece.type;
    pieceColor = props.cell.piece.color;
  }

  return (
    <button
      className={`square piece column${
        valid ? " valid" : ""
      } ${pieceType} ${pieceColor}`}
      onClick={onCellClick}
    ></button>
  );
};

const mapStateToProps = (state) => {
  let { selectedPiece, validMoves } = state.gameState;

  return { selectedPiece, validMoves };
};

export default connect(mapStateToProps, {
  selectPiece,
  registerValidMoves
})(Cell);
