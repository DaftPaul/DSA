const hashMap = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {                                                                                                        
  const stack = [];

  for (let p = 0; p < s.length; p++) {
    const element = s[p];
    if (hashMap.has(element))
      stack.push(element)
    else {
      const last = stack[stack.length-1]
      if (hashMap.get(last) === element) stack.pop()
      else return false;
    }
  }
  return stack.length <= 0
};

// time complex: O(n)
// space complex: O(n)

console.log(isValid("{[]()}"));
