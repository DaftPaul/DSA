/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    if (hashMap.has(nums[p1])) {
      return [hashMap.get(nums[p1]), p1];
    } else hashMap.set(numberToFind, p1);
  }
};

console.log("result", twoSum([2, 7, 11, 15], 9));
