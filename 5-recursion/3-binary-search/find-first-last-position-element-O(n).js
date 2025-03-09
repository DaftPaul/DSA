/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let L = 0,
    R = nums.length - 1;
  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    if (target === nums[mid]) {
      let LP = mid,
        RP = mid,
        tmp1,
        tmp2;
      console.log("LP :", LP);
      while (nums[LP] === target) {
        tmp1 = LP;
        LP--;
      }
      LP = tmp1;
      while (nums[RP] === target) {
        tmp2 = RP;
        RP++;
      }
      RP = tmp2;
      return [LP, RP];
    }
  }
};

// T complex: O(n);
// S complex O(1);
console.log(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 5));
