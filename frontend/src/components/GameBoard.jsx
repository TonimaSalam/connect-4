import React, { useState } from "react";
import GameCircle from "./GameCircle";
import GameBoardHeader from "./GameBoardHeader";
import GameBoardFooter from "./GameBoardFooter";
import { isWinner } from "../utility/winner-selector";
import "./components.css";

const player = true;
const gridSize = 36;

const GameBoard = () => {
  const [gameGrid, setGameGrid] = useState(Array(gridSize).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(player);

  const initGameGrid = () => {
    const circles = [];

    for (let i = 0; i != gridSize; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const onClickCircle = (id) => {
    console.log(`Clicked on circle ${id} by player ${currentPlayer ? 1 : 2}`);
    const winner = isWinner(gameGrid, id, currentPlayer);
    if (winner != 0)console.log(`Player ${winner} won the game.`);

    if (!gameGrid[id]) {
      setGameGrid((prevGrid) => {
        return prevGrid.map((circle, position) => {
          if (position == id) return currentPlayer ? 1 : 2;
          else return circle;
        });
      });
      setCurrentPlayer(!currentPlayer);
    } else {
      console.log(`Select an empty circle`);
    }
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        circleClassName={`player${gameGrid[id]}`}
        onClickCircle={onClickCircle}
      />
    );
  };
  return (
    <div className="game_board">
      <GameBoardHeader currentPlayer={currentPlayer ? 1 : 2}></GameBoardHeader>
      <div className="game_grid"> {initGameGrid()}</div>;
      <GameBoardFooter></GameBoardFooter>
    </div>
  );
};

export default GameBoard;
