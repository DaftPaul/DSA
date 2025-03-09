/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = function(heights) {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;
  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++
    }
    else p2--;
  }
  return maxArea;
};

// time: O(n)
// space: O(1)

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49