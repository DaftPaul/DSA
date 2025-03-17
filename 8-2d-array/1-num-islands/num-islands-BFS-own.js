/**
 * leetcode: https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} matrix
 * @return {number}
 * Secuencial and BFS approach
 */
const numIslands = function (matrix) {
  let count = 0;
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    const rows = matrix[rowIdx];
    for (let colIndx = 0; colIndx < rows.length; colIndx++) {
      const currentEl = rows[colIndx];
      if (currentEl === "0") continue;
      count++;
      BFS(matrix, rowIdx, colIndx);
    }
  }
  return count;
};

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const BFS = (matrix, row, col) => {
  const queue = [[row, col]];

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();
    matrix[currentRow][currentCol] = "0";

    for (let i = 0; i < directions.length; i++) {
      const [rowOperator, colOperator] = directions[i];
      const nextRow = currentRow + rowOperator,
        nextCol = currentCol + colOperator;

      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      )
        continue;

      if (matrix[nextRow][nextCol] === "1") {
        queue.push([nextRow, nextCol]);
        matrix[nextRow][nextCol] = "0";
        console.count("count while");
      }
    }
    // console.log(matrix);
  }
};

// T complex => O(m*n) where M is rows and N is columns
// S complex => O(max(m,n)) where M is rows and N is columns

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "0", "1", "1"],
  ])
); // 2
