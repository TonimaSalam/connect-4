import React from "react";

const PlayerTurn = ({turn, player}) => {
  return (
    <div className={`player_turn_${turn}`}>
      <div className={`player_turn_${turn}_text`}>Player {player} Turn</div>
    </div>
  );
};

export default PlayerTurn;
