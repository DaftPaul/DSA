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
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
};

const minCost = (i, cost) => {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
};

// T complex: O(2**n)
// S complex: O(2**n)

console.log(minCostClimbingStairs([10, 15, 20]));
