const isOdd = (number) => number % 2 === 0 ? false : true

/**
 * approach: Two pointer outter
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase("");
  let L = 0,
    R = s.length - 1;
    while (L <= R) {
    if (s[L] !== s[R]) return false;
    L++;
    R--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome('race a car'))
