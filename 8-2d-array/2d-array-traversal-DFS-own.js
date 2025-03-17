const traversalDFS = (
  matrix,
  row = 0,
  column = 0,
  resultTraversal = [],
  storedIndexes = new Map()
) => {
  storedIndexes.set(`${row}${column}`, true);
  resultTraversal.push(matrix[row][column]);
  const upValue = matrix[row - 1]?.[column];
  const rightValue = matrix[row]?.[column + 1];
  const downValue = matrix[row + 1]?.[column];
  const leftValue = matrix[row]?.[column - 1];

  if (upValue && !storedIndexes.has(`${row - 1}${column}`)) {
    row -= 1;
  } else if (rightValue && !storedIndexes.has(`${row}${column + 1}`)) {
    column += 1;
  } else if (downValue && !storedIndexes.has(`${row + 1}${column}`)) {
    row += 1;
  } else if (leftValue && !storedIndexes.has(`${row}${column - 1}`)) {
    column -= 1;
  } else {
    return resultTraversal;
  }

  return traversalDFS(matrix, row, column, resultTraversal, storedIndexes);
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
);
