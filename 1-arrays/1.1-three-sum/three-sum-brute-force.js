/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const sumToFind = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sumLeftRight = nums[left] + nums[right];
      if (sumLeftRight === sumToFind) {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++
        while (nums[left] === nums[left - 1] && left < right) left++;
      }
      if (sumLeftRight < sumToFind) {
        left++;
      } else right--;
    }
  }
  return triplets;
};

console.log("result", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("result", threeSum([0, 1, 1]));
console.log("result", threeSum([0, 0, 0, 0]));
console.log("result", threeSum([-2,0,1,1,2]));
