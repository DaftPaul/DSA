/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  quickSort(nums);
  return nums[nums.length - k];
};

const quickSort = (array, left = 0, right = array.length-1) => {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
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

// time complex O(nlogn)
// space complex O(n)
