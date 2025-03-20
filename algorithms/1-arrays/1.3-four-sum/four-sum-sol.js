/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const sumToFind = target - nums[i];
    console.log('sumToFind :', sumToFind);
    for (let i2 = i +1; i2 < nums.length; i2++) {
      if (i2 > i+1 && nums[i2] === nums[i2 - 1]) continue;
      let L = i2 + 1;
      let R = nums.length - 1;
      while (L < R) {
        const totalSum = nums[i2] + nums[L] + nums[R];
        console.log('totalSum :', totalSum);
        if (totalSum === sumToFind) {
          console.log('total sum equal target')
          result.push([nums[i], nums[i2], nums[L], nums[R]]);
          L++;
          while (nums[L] === nums[L-1]) {
            L++
          }
        } else if (totalSum < sumToFind) {
          L++;
        } else R--;
      }
      
    }
  }
  return result;
};

console.log(fourSum([2,2,2,2,2], 8));
