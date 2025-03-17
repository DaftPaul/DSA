/**
 * @param {number[]} nums
 * @return {number}
 * kadane algorithm
 */
var maxSubArray = function (nums) {
  let longest = nums[0];
  let currentSum = 0;

  for (let p = 0; p < nums.length; p++) {
      currentSum = Math.max(currentSum, 0)
      currentSum += nums[p]
      longest = Math.max(currentSum, longest);
  }
  return longest;
};

// T complex: O(n)
// S complex: O(1)