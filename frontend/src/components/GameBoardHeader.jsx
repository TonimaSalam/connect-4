import React from 'react'
import "./components.css";

const GameBoardHeader = ({currentPlayer}) => {
  return (
    <div className="game_board_header">
        <div className="game_board_header_text">Player {currentPlayer} Turn</div>  
    </div>
  )
}

export default GameBoardHeader
