const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

/**
 * leetcode: https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} matrix
 * @return {number}
 * Secuencial and BFS approach
 */
const numIslands = function (matrix) {
  let islandCount = 0;

  for (let row = 0; row < matrix.length; row++) {
    const rows = matrix[row];
    for (let col = 0; col < rows.length; col++) {
      const element = rows[col];
      if (element === "1") {
        islandCount++;
        matrix[row][col] = 0;

        const queue = [];
        queue.push([row, col]);

        while (queue.length) {
          const currentPosition = queue.shift();
          const currentRow = currentPosition[0];
          const currentCol = currentPosition[1];

          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

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
            }
          }
        }
      }
    }
  }

  return islandCount;
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
);
