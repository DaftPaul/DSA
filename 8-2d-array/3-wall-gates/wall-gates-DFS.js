/*
Leetcode: https://leetcode.com/problems/walls-and-gates
286. Walls and Gates

You are given a m x n 2D grid initialized with these three possible values.


-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.



Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.


For example, given the 2D grid:
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF



After running your function, the 2D grid should be:
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];
const EMPTY = 2147483647;
const WALL = -1;
const GATE = 0;

/**
 * Leetcode: https://leetcode.com/problems/walls-and-gates
 * @param {character[][]} matrix
 * @return {number}
 * Secuencial and DFS approach
 */
const wallsAndGates = function (matrix) {
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const rows = matrix[rowIdx];
    for (let colIndx = 0; colIndx < rows.length; colIndx++) {
      const currentEl = rows[colIndx];
      if (currentEl === GATE) {
        DFS(matrix, rowIdx, colIndx);
      }
    }
  }
  return matrix;
};

const DFS = (matrix, row, col, distance = 0) => {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    distance > matrix[row][col]
  )
    return;

  matrix[row][col] = distance;

  for (let i = 0; i < directions.length; i++) {
    const [rowOperator, colOperator] = directions[i];
    const nextRow = row + rowOperator,
      nextCol = col + colOperator;

    const newDistance = distance + 1;
    DFS(matrix, nextRow, nextCol, newDistance);
  }
};

// T complex: O(n) or O(m*n)
// S complex: O(n) or O(m*n)

console.log(
  wallsAndGates([
    [EMPTY, -1, 0, EMPTY],
    [EMPTY, EMPTY, EMPTY, -1],
    [EMPTY, -1, EMPTY, -1],
    [0, -1, EMPTY, EMPTY],
  ])
); /* 
  LOG
  [
    [3, -1, 0, 1],
    [2, 2, 1, -1],
    [1, -1, 2, -1],
    [0, -1, 3, 4],
  ];
*/
