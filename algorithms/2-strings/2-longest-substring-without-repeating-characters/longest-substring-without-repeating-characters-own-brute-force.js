/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;
  const map = new Map();
  let initialPointer = 0;
  let longerSubstring = 0;

  for (let p = 0; p < s.length; p++) {
    const element = s[p];

    if (!map.has(element)) {
      map.set(element, p);
      longerSubstring++;
      if (longerSubstring > longest) longest = longerSubstring;
    } else {
      map.clear();
      initialPointer++;
      p = initialPointer;
      longerSubstring = 0;
    }
  }

  return longest;
};

// time complex: O(n2)
// space complex: O(n)

// console.log(lengthOfLongestSubstring("aab"));
