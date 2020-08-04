import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import { selectPiece } from '../actions/GameActions';

const Cell = (props) => {
  const onCellClick = (e) => {
    e.preventDefault();

    if (
      props.board &&
      props.player &&
      props.board.turn !== props.player.color
    ) {
      alert('It is not your turn');
      return;
    }

    // First click selects a piece, second click selects the cell to move to.
    if (!props.selectedPiece.type && props.cell.piece.type) {
      console.log('Alright! Selecting a piece!');
      props.selectPiece(props.cell.piece ? props.cell.piece : {});
    } else if (props.selectedPiece.type) {
      console.log('Woohoo gonna move that piece!');
      props.movePieceCallback(props.selectedPiece, props.cell);
      // Clear selected piece
      props.selectPiece({});
    }
  };

  let pieceType = '';
  let pieceColor = '';
  if (props.cell.piece) {
    pieceType = props.cell.piece.type;
    pieceColor = props.cell.piece.color;
  }

  return (
    <button
      className={`square piece column ${pieceType} ${pieceColor}`}
      onClick={onCellClick}
    ></button>
  );
};

const mapStateToProps = (state) => {
  let { selectedPiece } = state.gameState;

  return { selectedPiece };
};

export default connect(mapStateToProps, {
  selectPiece
})(Cell);
