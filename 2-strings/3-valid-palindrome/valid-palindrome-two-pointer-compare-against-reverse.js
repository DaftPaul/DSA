const isOdd = (number) => (number % 2 === 0 ? false : true);

/**
 * approach: reverse string
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase("");

  const stringReverted = s.split('').reverse().join('');

  for (let p = 0; p < s.length; p++) {
    if (s[p] !== stringReverted[p]) return false;
  }

  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome('race a car'))
