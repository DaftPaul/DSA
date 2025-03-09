/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = function(heights) {
    let maxArea = 0;
    for (let p1 = 0; p1 < heights.length; p1++) {
      for(let p2 = p1 + 1; p2 < heights.length; p2++) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
      }
    }
    return maxArea;
};

// time: O(n^2)
// space: O(1)

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49