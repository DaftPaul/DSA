const quickSort = (array) => {
  if (array.length <= 1) return array;

  let i = 0,
    j = 0,
    pivot = array.length - 1;

  // while approach
  while (j < pivot) {
    const element = array[j];
    if (element <= array[pivot]) {
      swapElements(array, i, j);
      i++;
    }
    j++;
  }

  // Array approach
  // for (let j = 0; j < pivot; j++) {
  //   const element = array[j];
  //   if (element <= array[pivot]) {
  //     swapElements(array, i, j);
  //     i++;
  //   }
  // }

  swapElements(array, i, pivot);

  return [...quickSort(array.slice(0, i)), ...quickSort(array.slice(i))];
};

const swapElements = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(quickSort([5, 3, 1, 6, 4, 2, 9, 0, 8, 7, 7, 7, 7, 10, -10]));