const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const traversalBFS = (matrix) => {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  let [row, col] = [
    Math.floor(matrix.length / 2),
    Math.floor(matrix[0].length / 2),
  ];
  const values = [matrix[row][col]],
    queue = [[row, col]];

  seen[row][col] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const [rowOperator, colOperator] = directions[i];
      const newRow = row + rowOperator;
      const newCol = col + colOperator;

      if (
        newRow < 0 ||
        newRow >= matrix.length ||
        newCol < 0 ||
        newCol >= matrix[0].length ||
        seen[newRow][newCol]
      )
        continue;

      if (matrix[newRow][newCol]) {
        seen[newRow][newCol] = true;
        values.push(matrix[newRow][newCol]);
        queue.push([newRow, newCol]);
      }
    }
  }

  return values;
};

console.log(
  traversalBFS([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
); // Array(20) [ 13, 8, 14, 18, 12, 3, 9, 7, 15, 19, 17, 11, 4, 2, 10, 6, 20, 16, 5, 1];
