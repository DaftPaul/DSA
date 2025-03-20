/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seenCharacters = new Map();
  let longest = 0, L = 0;

  for (let R = 0; R < s.length; R++) {
    const currentChar = s[R];
    const prevSeenChar = seenCharacters.get(currentChar);

    if (prevSeenChar >= L) {
      L = prevSeenChar + 1;
      if (s.length - L + 1 <= longest) break;
    }

    const currentLength = R - L + 1;
    seenCharacters.set(currentChar, R);
    longest = Math.max(longest, currentLength);
  }
  return longest;
};

// time complex: O(n)
// space complex: O(n)

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcbdaac"));
console.log(lengthOfLongestSubstring("abcabcbb"));
