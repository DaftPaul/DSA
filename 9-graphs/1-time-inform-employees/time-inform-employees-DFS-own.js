/* 
  A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID. Each 
  employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. 
  Also, it is guaranteed that the subordination relationships have a tree structure.The head of the company wants to inform all the company 
  employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all 
  employees know about the urgent news.

  The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct 
  subordinates can start spreading the news).

  Return the number of minutes needed to inform all the employees about the urgent news.
*/

/**
 * Leetcode: https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 * DFS approach
 */
const numOfMinutes = function (n, headID, manager, informTime) {
  const graph = getAdjencyList(manager);
  return traversalGraphDFS(graph, informTime, headID); // T: O(n)
};

const traversalGraphDFS = (graph, informTime, employeeId) => {
  const subordinates = graph[employeeId];

  // edge case
  if (subordinates.length === 0) return 0;

  let numOfMinutes = informTime[employeeId],
    maxSubordinateMinutes = 0;

  for (let i = 0; i < subordinates.length; i++) {
    const nextSubordinate = subordinates[i];

    // taking the max of the subordinates
    maxSubordinateMinutes = Math.max(
      traversalGraphDFS(graph, informTime, nextSubordinate),
      maxSubordinateMinutes
    );
  }

  return numOfMinutes + maxSubordinateMinutes;
};

const getAdjencyList = (managers) => {
  const adjencyList = new Array(managers.length).fill(0).map(() => []); // T: O(n)

  for (let employee = 0; employee < managers.length; employee++) {
    // T: O(n)
    const manager = managers[employee];
    if (manager !== -1) {
      adjencyList[manager].push(employee);
    }
  }

  return adjencyList;
};

// T: O(n)
// S: O(n)

console.log(
  numOfMinutes(8, 4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 3, 6, 0])
);
