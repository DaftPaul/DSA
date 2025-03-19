/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 */

/**
 * Leetcode: https://leetcode.com/problems/min-cost-climbing-stairs/description/
 * @param {number[]} cost
 * @return {number}
 * Dynamic programming bottom up approach optimizing space complx
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;

  let dpOne = cost[0];
  let dpTwo = cost[1];

  for (let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
};

// T complex: O(n)
// S complex: O(1)

console.log(minCostClimbingStairs([10, 15, 20]));
