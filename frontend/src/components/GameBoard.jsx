import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import GameBoardHeader from "./GameBoardHeader";
import GameBoardFooter from "./GameBoardFooter";
import { isWinner, isDraw, computerMove } from "../utility/winner-selector";
import { player, gameState, gridSize } from "../utility/game-objects";
import PlayerTurn from "./PlayerTurn";
import { toast } from "react-toastify";

const GameBoard = () => {
  const [gameGrid, setGameGrid] = useState(Array(gridSize).fill(player.blank));
  const [currentPlayer, setCurrentPlayer] = useState(player.one);
  const [currentGameState, setcurrentGameState] = useState(gameState.playing);
  const [score, setScore] = useState(0);

  useEffect(() => initGame(), []);

  const initGame = () => {
    setGameGrid(Array(gridSize).fill(player.blank));
    setCurrentPlayer(player.one);
    setcurrentGameState(gameState.playing);
  };

  const initGameGrid = () => {
    const circles = [];

    for (let i = 0; i != gridSize; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const onClickCircle = (id) => {
    if (currentGameState === gameState.playing) {
      if (isWinner(gameGrid, id, currentPlayer) === player.one) {
        setScore(score + 1);
        setcurrentGameState(gameState.win);
        toast.info(`Click next button`, { theme: "dark" });
      } else if (isWinner(gameGrid, id, currentPlayer) === player.two) {
        setcurrentGameState(gameState.loss);
        toast.info(`Click next button`, { theme: "dark" });
      } else if (isDraw(gameGrid, id, currentPlayer)) {
        setcurrentGameState(gameState.draw);
        toast.info(`Click next button`, { theme: "dark" });
      }
    }

    if (gameGrid[id] && currentGameState === gameState.playing) {
      toast.warn("Select an empty circle", { theme: "dark" });
      return;
    }

    if (currentGameState === gameState.playing) {
      setGameGrid((prevGrid) => {
        return prevGrid.map((circle, position) => {
          if (position === id) return currentPlayer;
          else return circle;
        });
      });
      setCurrentPlayer(currentPlayer === player.one ? player.two : player.one);
    }
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        circleClassName={`player${gameGrid[id]}`}
        onClickCircle={onClickCircle}
        currentPlayer={currentPlayer}
      />
    );
  };

  useEffect(() => {
    if (currentPlayer === player.two) {
      const move = computerMove(gameGrid);
      console.log(move);
      if (currentGameState === gameState.playing)
        setTimeout(() => onClickCircle(move), 1000);
    }
  }, [currentPlayer]);

  return (
    <div className="game_board">
      <GameBoardHeader
        score={score}
        currentGameState={currentGameState}
      ></GameBoardHeader>
      <div className="game_board_body">
        {currentPlayer == player.one ? (
          <PlayerTurn turn="on" player="1"></PlayerTurn>
        ) : (
          <PlayerTurn turn="off" player="1"></PlayerTurn>
        )}
        <div className="game_grid"> {initGameGrid()}</div>
        {currentPlayer == player.two ? (
          <PlayerTurn turn="on" player="2"></PlayerTurn>
        ) : (
          <PlayerTurn turn="off" player="2"></PlayerTurn>
        )}
      </div>
      <GameBoardFooter
        onClickFooter={initGame}
        currentGameState={currentGameState}
      ></GameBoardFooter>
    </div>
  );
};

export default GameBoard;
