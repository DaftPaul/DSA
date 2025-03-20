/**
 * 37. Sudoku Solver
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 *
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 *
 * The '.' character indicates empty cells.
 *
 */

/**
 * Leetcode: https://leetcode.com/problems/sudoku-solver/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * Bactracking recursive and brute force solution
 */
const solveSudoku = function (board) {
  const n = board.length;
  const colsMap = Array.from({ length: n }, () => new Map());
  const rowsMap = Array.from({ length: n }, () => new Map());
  const boxesMap = Array.from({ length: n }, () => new Map());

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== ".") {
        const val = board[r][c];
        const boxId = getBoxId(r, c);
        colsMap[c].set(val, true);
        rowsMap[r].set(val, true);
        boxesMap[boxId].set(val, true);
      }
    }
  }
  recursiveTraverse(board, colsMap, rowsMap, boxesMap);
};

const recursiveTraverse = (board, colsMap, rowsMap, boxesMap, r = 0, c = 0) => {
  if (r === board.length || c === board[0].length) return true;
  else {
    if (board[r][c] === ".") {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toString();
        board[r][c] = numVal;
        const boxId = getBoxId(r, c);
        const colMap = colsMap[c];
        const rowMap = rowsMap[r];
        const boxMap = boxesMap[boxId];

        if (isValid(numVal, colMap, rowMap, boxMap)) {
          colMap.set(numVal, true);
          rowMap.set(numVal, true);
          boxMap.set(numVal, true);
          if (c === board[0].length - 1) {
            if (recursiveTraverse(board, colsMap, rowsMap, boxesMap, r + 1, 0)) {
              return true;
            }
          } else {
            if (recursiveTraverse(board, colsMap, rowsMap, boxesMap, r, c + 1)) {
              return true;
            }
          }
          colMap.delete(numVal);
          rowMap.delete(numVal);
          boxMap.delete(numVal);
        }

        board[r][c] = ".";
      }
    } else {
      if (c === board[0].length - 1) {
        if (recursiveTraverse(board, colsMap, rowsMap, boxesMap, r + 1, 0)) {
          return true;
        }
      } else {
        if (recursiveTraverse(board, colsMap, rowsMap, boxesMap, r, c + 1)) {
          return true;
        }
      }
    }
  }
};

const isValid = (val, colMap, rowMap, boxMap) => {
  if (colMap.has(val) || rowMap.has(val) || boxMap.has(val)) {
    return false;
  } else {
    return true;
  }
};

const getBoxId = (r, c) => {
  const colVal = Math.floor(c / 3);
  const rowVal = Math.floor(r / 3) * 3;

  return colVal + rowVal;
};

// T complex O(9!**9)
// S complex O(81) || O(1)

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
