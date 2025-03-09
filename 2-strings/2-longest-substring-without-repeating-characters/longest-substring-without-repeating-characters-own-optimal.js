/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seenCharacter = new Map();
  let longest = 0;
  let L = 0,
    R = 0;

  while (R < s.length) {
    const rightElement = s[R];

    if (seenCharacter.get(rightElement) >= L) {
      L = seenCharacter.get(rightElement) + 1;
      if (s.length - L + 1 <= longest) break;
    } 
    const diff = R - L + 1;
    seenCharacter.set(rightElement, R);
    longest = Math.max(longest, diff);
    R++;
  }
  console.log("seenCharacter :", seenCharacter);

  return longest;
};

// time complex: O(n)
// space complex: O(n)

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcbdaac"));
console.log(lengthOfLongestSubstring("abcabcbb"));
