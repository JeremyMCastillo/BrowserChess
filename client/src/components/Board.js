import React, { useState } from "react";
import Cell from "./Cell";

function Board(props) {
  return (
    <div class="columns is-gapless">
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
      <div class="tile">No gap</div>
    </div>
  );
}

export default Board;
