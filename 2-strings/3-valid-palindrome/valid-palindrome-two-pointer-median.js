const isOdd = (number) => (number % 2 === 0 ? false : true);

/**
 * approach: Two pointer start from median
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase("");
  const median = Math.trunc(s.length / 2);
  const isStringOdd = isOdd(s.length);
  let L = isStringOdd ? median : median - 1,
    R = median;

  while (L >= 0 && R <= s.length) {
    if (s[L] !== s[R]) return false;
    L--;
    R++;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome('race a car'))
