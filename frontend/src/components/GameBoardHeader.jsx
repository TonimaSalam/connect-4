import React from "react";
import { gameState } from "../utility/game-objects";

const GameBoardHeader = ({ score, currentGameState }) => {
  const renderHeaderText = () => {
    if (currentGameState === gameState.playing)
      return <div>Score : {score}</div>;
    else if (currentGameState === gameState.win) return <div>You win</div>;
    else if (currentGameState === gameState.loss) return <div>You loss</div>;
    else if (currentGameState === gameState.draw) return <div>Game Draw</div>;
  };
  return (
    <div className="game_board_header">
      <div className="game_board_header_text">{renderHeaderText()}</div>
    </div>
  );
};

export default GameBoardHeader;
