const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const traversalDFS = (matrix) => {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];
  DFS(matrix, 0, 0, seen, values);
  return values;
};

const DFS = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const currentDirection = directions[i];

    DFS(
      matrix,
      row + currentDirection[0],
      col + currentDirection[1],
      seen,
      values
    );
  }
};

// T complex: O(n)
// S complex: O(n)

console.log(
  traversalDFS([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
); // Array(20) [1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16 ];
