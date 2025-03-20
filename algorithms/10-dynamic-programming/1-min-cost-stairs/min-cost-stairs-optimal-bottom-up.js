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
 * Dynamic programming bottom up approach
 */
const minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = cost[i];
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};

// T complex: O(n)
// S complex: O(n)

console.log(minCostClimbingStairs([10, 15, 20]));
