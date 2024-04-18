import React from "react";
import "./components.css";
const GameCircle = ({ id, circleClassName, onClickCircle }) => {
  const clickedCircle = (event, id) => {
    onClickCircle(id);
  };
  return (
    <div
      className={`game_circle ${circleClassName}`}
      onClick={(event) => clickedCircle(event, id)}
    ></div>
  );
};

export default GameCircle;
