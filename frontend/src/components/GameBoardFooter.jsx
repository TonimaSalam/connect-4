import React from "react";
import { gameState } from "../utility/game-objects";

const GameBoardFooter = ({ onClickFooter, currentGameState }) => {
  const renderFooterText = () => {
    if (currentGameState === gameState.playing) return <div>New Game</div>;
    else return <div>Next</div>;
  };
  return (
    <div className="game_board_footer">
      <div className="game_board_footer_text" onClick={onClickFooter}>
        {renderFooterText()}
      </div>
    </div>
  );
};

export default GameBoardFooter;
