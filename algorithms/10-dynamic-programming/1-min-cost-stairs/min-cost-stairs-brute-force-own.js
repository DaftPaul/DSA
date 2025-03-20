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
const minCostClimbingStairs = function (cost, i = cost.length) {
  if (i === 0 || i === 1) return cost[i];
  return (
    (cost[i] ?? 0) +
    Math.min(
      minCostClimbingStairs(cost, i - 1),
      minCostClimbingStairs(cost, i - 2)
    )
  );
};

// T complex: O(2**n)
// S complex: O(2**n)

console.log(minCostClimbingStairs([10, 15, 20]));
