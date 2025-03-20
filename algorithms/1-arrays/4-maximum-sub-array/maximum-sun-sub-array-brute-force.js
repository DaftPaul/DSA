// leetcode: https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 * brute force solution
 */
var maxSubArray = function(nums) {
  let longest = nums[0];

  for (let p = 0; p < nums.length; p++) {
    let currentSum = 0;
    for (let p2 = p; p2 < nums.length; p2++) {
      const element = nums[p2];
      currentSum += element
      longest = Math.max(currentSum, longest);
    }
  }
  return longest;
};

// T complex: O(n2)
// S complex: O(1)