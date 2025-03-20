/**
 * @param {number[]} heights
 * @return {number}
 */
var getTrappingRainWater = function (heights) {
  let total = 0;
  let L = 0;
  let R = heights.length - 1
  let maxL = 0;
  let maxR = 0;
  while (L < R) {
    if (heights[L] <= heights[R]) {
      if (heights[L] < maxL) total += (maxL - heights[L])
      else maxL = heights[L]
      L++
    } else {
      if (heights[R] < maxR) total += (maxR - heights[R])
      else maxR = heights[R]
      R--
    }
  }
  return total;
};

// time complex: O(n)
// space complex: O(1)

console.log(getTrappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(getTrappingRainWater([4, 2, 0, 3, 2, 5]));
console.log(getTrappingRainWater([3]));

