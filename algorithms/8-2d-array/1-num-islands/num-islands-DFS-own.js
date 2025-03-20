/**
 * leetcode: https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 * Secuencial and DFS approach
 */
const numIslands = function (grid) {
  let islandCount = 0;
  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    const rows = grid[rowIdx];
    for (let colIdx = 0; colIdx < rows.length; colIdx++) {
      const element = rows[colIdx];
      if (element === "0") continue;
      islandCount++;
      DFS(grid, rowIdx, colIdx);
    }
  }
  return islandCount;
};

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const DFS = (grid, row, col) => {
  for (let i = 0; i < directions.length; i++) {
    const [rowOperator, colOperator] = directions[i];

    const nextRow = row + rowOperator,
      nextCol = col + colOperator;

    if (
      nextRow < 0 ||
      nextRow >= grid.length ||
      nextCol < 0 ||
      nextCol >= grid[0].length ||
      grid[nextRow][nextCol] === "0"
    )
      continue;

    grid[nextRow][nextCol] = "0";
    DFS(grid, nextRow, nextCol);
  }
};

// T complex => O(m*n) where M is rows and N is columns
// S complex => O(m*n) where M is rows and N is columns

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "0", "1", "1"],
  ])
); // 2
