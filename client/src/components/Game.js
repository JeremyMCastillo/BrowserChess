import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { connect } from "react-redux";
import openSocket from "socket.io-client";
import "../index.css";
import Board from "./Board";
import { Graveyard } from "./Graveyard";
import { loadBoard } from "../actions/LandingActions";
const socket = openSocket("/");

const Game = (props) => {
  let [status, setStatus] = useState("Joining the game.");
  let { gameCode } = useParams();
  let history = useHistory();

  useEffect(() => {
    socket.emit("gameJoined", { gameCode });
  }, []);

  useEffect(() => {
    socket.on("gameJoined", () => {
      props.loadBoard(gameCode);
    });
    socket.on("gameDisconnected", () => {
      props.loadBoard(gameCode);
    });
    socket.on("pieceMoved", () => {
      console.log("Got piece moved callback");
      props.loadBoard(gameCode);
    });
  }, [socket]);

  const movePiece = (piece, cell) => {
    console.log("Sending piece move call.");
    socket.emit("movePiece", { gameCode: gameCode, piece, cell });
  };

  console.log(gameCode);

  if (!props.board.game_code) {
    history.push("/");
  }

  const renderAlert = () => {
    if (status) {
      return <Alert severity="info">{status}</Alert>;
    }
  };

  return (
    <div>
      {renderAlert()}
      <div className="columns">
        <div className="column is-narrow">
          <Graveyard />
        </div>
        <div className="column">
          <Board movePieceCallback={movePiece} />
        </div>
        <div className="column is-narrow">
          <Graveyard />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { board, player, gameCode } = state.landing;

  return { board, player, gameCode };
};

export default connect(mapStateToProps, {
  loadBoard,
})(Game);
