const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

/**
 * @param {number[][]} grid
 * @return {number}
 * Secuencial and BFS approach
 */
const orangesRotting = function (grid) {
  // edge cases
  if (grid.length === 0) return 0;

  // identify rotting oranges and keep track number fresh oranges
  // secuencial approach
  let numFreshOranges = 0,
    minutes = 0;
  const queue = [];

  for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
    const row = grid[rowIdx];
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      const currentValue = row[colIdx];
      if (currentValue === FRESH) numFreshOranges++;
      else if (currentValue === ROTTEN) queue.push([rowIdx, colIdx]);
    }
  }

  // proceed to compute rootting algorithm
  // BFS approach:
  // - use queue size to acc minutes
  // - process rotting oranges
  //   - rot adjacent fresh oranges
  //   - push into queues
  //   - decrement fresh oranges count

  while (queue.length) {
    let currentLength = queue.length;
    console.log("queue :", queue);

    while (currentLength > 0) {
      const [row, col] = queue.shift();
      currentLength--;

      for (let i = 0; i < directions.length; i++) {
        const [rowOperator, colOperator] = directions[i];
        const nextRow = row + rowOperator,
          nextCol = col + colOperator;

        if (
          nextRow < 0 ||
          nextRow >= grid.length ||
          nextCol < 0 ||
          nextCol >= grid[0].length
        )
          continue;

        const nextValue = grid[nextRow][nextCol];

        if (nextValue === FRESH) {
          numFreshOranges--;
          grid[nextRow][nextCol] = 2;
          queue.push([nextRow, nextCol]);
        }
      }
    }

    if (queue.length > 0) minutes++;
  }

  if (numFreshOranges > 0) return -1;
  return minutes;
};

// T complex: O(n) or O(m*n)
// S complex: O(n) or O(m*n)

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
