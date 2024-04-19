import { winningPositions, player } from "./game-objects";

export const isWinner = (grid, move, cuurentPlayer) => {
  const gameGrid = [...grid];
  gameGrid[move] = cuurentPlayer;

  for (let i = 0; i < winningPositions.length; i++) {
    const [p1, p2, p3, p4] = winningPositions[i];
    if (
      gameGrid[p1] != 0 &&
      gameGrid[p1] === gameGrid[p2] &&
      gameGrid[p2] === gameGrid[p3] &&
      gameGrid[p3] === gameGrid[p4]
    ) {
      console.log("-----------------Game Over----------------");
      return gameGrid[p1];
    }
  }

  return player.blank;
};

export const isDraw = (grid, move, cuurentPlayer) => {
  const gameGrid = [...grid];
  gameGrid[move] = cuurentPlayer;

  const emptyCircles = gameGrid.reduce((count, circle) => count + (circle === 0), 0);
  return emptyCircles? false : true;
};

export const randomMove = (grid) =>{
  const emptyCircles = grid.reduce((circles, val, idx) => {
    if (val === player.blank) circles.push(idx);
    return circles;
  }, []);
  console.log(emptyCircles[Math.floor(Math.random() * emptyCircles.length)])
  return emptyCircles[Math.floor(Math.random() * emptyCircles.length)];
}
