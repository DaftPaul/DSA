/**
 * @param {number[]} heights
 * @return {number}
 */
var getTrappingRainWater = function (heights) {
  let total = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    let maxL = 0;
    let maxR = 0;
    let L = p1;
    let R = p1;

    // one while
    // while (L >= 0 || R < heights.length) {
    //   if (L >= 0) {
    //     maxL = Math.max(heights[L], maxL);
    //     L--;
    //   }

    //   if (R < heights.length) {
    //     maxR = Math.max(heights[R], maxR);
    //     R++;
    //   }
    // }

    // two whiles:
    while (L >= 0) {
      maxL = Math.max(heights[L], maxL);
      L--;
    }
    while (R < heights.length) {
      maxR = Math.max(heights[R], maxR);
      R++;
    }
    const currentWater = Math.min(maxL, maxR) - heights[p1];
    if (currentWater > 0) total += currentWater;
  }

  return total;
};

// time complex: O(n2)
// space complex: O(1)

console.log(getTrappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(getTrappingRainWater([4, 2, 0, 3, 2, 5]));
console.log(getTrappingRainWater([3]));

