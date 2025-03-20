/**
 * 688. Knight Probability in Chessboard
 *
 * On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves.
 * The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
 *
 * A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal
 * direction, then one cell in an orthogonal direction.
 * Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece
 * would go off the chessboard) and moves there.
 *
 * The knight continues moving until it has made exactly k moves or has moved off the chessboard.
 *
 * Return the probability that the knight remains on the board after it has stopped moving.
 */

const directions = [
  [-2, -1], // 2 top 1 left
  [-2, 1], // 2 top 1 right
  [-1, 2], // 1 top 2 right
  [1, 2], // 1 bot 2 right
  [2, 1], // 2 bot 1 right
  [2, -1], // 2 bot 1 left
  [1, -2], // 1 bot 2 left
  [-1, -2], // 1 top 2 left
];

/**
 * Leetcode: https://leetcode.com/problems/knight-probability-in-chessboard/
 * @param {number} n
 * @param {number} k
 * @param {number} r
 * @param {number} c
 * @return {number}
 * iterative solution DP bottom up or tabulation
 * optimization space complex
 */
const knightProbability = function (n, k, r, c) {
  let prevDp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  let currDp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  prevDp[r][c] = 1;

  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (let i = 0; i < directions.length; i++) {
          const [rowOperator, colOperator] = directions[i];
          const previousRow = row + rowOperator;
          const previousCol = col + colOperator;

          if (
            previousRow >= 0 &&
            previousRow < n &&
            previousCol >= 0 &&
            previousCol < n
          ) {
            currDp[row][col] += prevDp[previousRow][previousCol] / 8;
          }
        }
      }
    }
    prevDp = currDp;
    currDp = Array.from({ length: n }, () =>
      Array.from({ length: n }, () => 0)
    );
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += prevDp[i][j];
    }
  }

  return res;
};

// T O(N**2*k)
// S O(N**2)

console.time("asd");
console.log(knightProbability(6, 3, 1, 1));
console.timeEnd("asd");
