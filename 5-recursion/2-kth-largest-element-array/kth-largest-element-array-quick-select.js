/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  return quickSelect(nums, indexToFind);
};

const quickSelect = (
  array,
  indexToFind,
  left = 0,
  right = array.length - 1
) => {
  if (left <= right) {
    const partitionIndex = partition(array, left, right);
    if (indexToFind === partitionIndex) return array[partitionIndex];
    else if (indexToFind > partitionIndex)
      return quickSelect(array, indexToFind, partitionIndex + 1, right);
    else return quickSelect(array, indexToFind, left, partitionIndex - 1);
  }
};

const partition = (array, left, right) => {
  const pivotElement = array[right];
  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    const element = array[j];
    if (element < pivotElement) {
      swapElements(array, partitionIndex, j);
      partitionIndex++;
    }
  }
  swapElements(array, partitionIndex, right);
  return partitionIndex;
};

const swapElements = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// T complex O(n) ---  worst case O(n2)
// S complex O(1) --- tail recursion (applicable to certain languages)

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
