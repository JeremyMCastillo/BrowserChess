import React from "react";
import { Typography, Card } from "@material-ui/core";
import { Graveyard } from "./Graveyard";

const Player = (props) => {
  const playerName = props.player ? props.player.name : "No Player";
  const turnMessage =
    props.board &&
    props.player &&
    props.board.player_1 &&
    props.board.player_2 &&
    props.board.turn === props.player.color
      ? "Your Turn"
      : "";
  try {
    console.log(props.player.color);
    console.log(props.board.turn);
  } catch (err) {}

  return (
    <div className="container">
      <Card className="card">
        <div className="card-header">
          <Typography
            component="h4"
            variant="h4"
            className="card-header-title has-text-centered is-block"
          >
            {playerName}
          </Typography>
          <Typography variant="subtitle1">{turnMessage}</Typography>
        </div>
        <div className="card-body">
          <Graveyard graveyard={props.player ? props.player.graveyard : []} />
        </div>
      </Card>
    </div>
  );
};

export default Player;
