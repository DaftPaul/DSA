/**
 * @param {number} n
 * @return {number}
 */
const factorial = (n) => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

// time complex: O(n)
// space complex O(n)

console.log(factorial(3));
