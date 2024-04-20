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
    ) return gameGrid[p1];
  }

  return player.blank;
};

export const isDraw = (grid, move, cuurentPlayer) => {
  const gameGrid = [...grid];
  gameGrid[move] = cuurentPlayer;
  const emptyCircles = gameGrid.reduce(
    (count, circle) => count + (circle === 0),
    0
  );
  return emptyCircles ? false : true;
};

const randomMove = (grid) => {
  const emptyCircles = grid.reduce((circles, val, idx) => {
    if (val === player.blank) circles.push(idx);
    return circles;
  }, []);
  return emptyCircles[Math.floor(Math.random() * emptyCircles.length)];
};

const findMyMove = (grid, player) => {
  let move = -1;
  for (let i = 0; i < winningPositions.length && move === -1; i++) {
    const [w1, w2, w3, w4] = winningPositions[i];
    const [p1, p2, p3, p4] = [grid[w1], grid[w2], grid[w3], grid[w4]];
    const count =
      (p1 === player) + (p2 === player) + (p3 === player) + (p4 === player);
    if (count == 3) move = !p1 ? w1 : !p2 ? w2 : !p3 ? w3 : !p4 ? w4 : -1;
  }

  return move;
};

export const computerMove = (grid) => {
  return findMyMove(grid, 2) !== -1
    ? findMyMove(grid, 2)
    : findMyMove(grid, 1) !== -1
    ? findMyMove(grid, 1)
    : randomMove(grid);
};
