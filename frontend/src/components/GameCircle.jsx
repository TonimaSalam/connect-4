import React from "react";
import { player } from "../utility/game-objects";

const GameCircle = ({ id, circleClassName, onClickCircle,currentPlayer }) => {
  const clickedCircle = (event, id) => {
    if(currentPlayer === player.one)onClickCircle(id);
  };
  return (
    <div
      className={`game_circle ${circleClassName}`}
      onClick={(event) => clickedCircle(event, id)}
    ></div>
  );
};

export default GameCircle;
