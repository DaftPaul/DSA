/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let longest = 0;

  for (let p = 0; p < s.length; p++) {
    const map = new Map();
    let currentLongSubstring = 0;
    for (let p2 = p; p2 < s.length; p2++) {
      const element = s[p2];
      if (!map.has(element)) {
        currentLongSubstring++;
        map.set(element, p2);
        longest = Math.max(currentLongSubstring, longest);
      } else {
        break;
      }
    }
  }
  return longest;
};

// time complex: O(n2)
// space complex: O(n)

console.log(lengthOfLongestSubstring("pwwkew"));
