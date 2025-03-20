const isValidSubPalindrome = (string, L, R) => {
  while (L <= R) {
    if (string[L] !== string[R]) {
      return false
    }
    L++;
    R--;
  }
  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase("");
  let L = 0,
    R = s.length - 1;
  while (L <= R) {
    if (s[L] !== s[R]) {
      if (isValidSubPalindrome(s, L+1, R)) return true;
      else return isValidSubPalindrome(s, L, R-1);
    }
    L++;
    R--;
  }
  return true;
};

// time complex: O(n)
// space complex: O(1)

console.log(validPalindrome('abccdba'))