/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  const firstpos = binarySearch(nums, target, 0, nums.length - 1);
  if (firstpos === -1) return [-1, -1];
  let startPos = firstpos,
    endPos = firstpos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, target, 0, startPos - 1);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    console.log("endPos + 1 :", endPos + 1);
    endPos = binarySearch(nums, target, endPos + 1, nums.length - 1);
  }

  endPos = temp2;

  return [startPos, endPos];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target, L, R) {
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

// T complex O(logn)
// S complex O(1)

console.log(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 5));
