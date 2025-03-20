/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let L = 0,
    R = nums.length - 1;

  while (L <= R) {
    const mid = Math.floor((L + R) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }
  return -1;
};

// T complex : O(logn)
// S complex O(1)

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], -1));
