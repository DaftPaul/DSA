const hashMap = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]);

/**
 * @param {string} s
 * @return {boolean}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  let newString = s.split("");

  for (let p = 0; p < s.length; p++) {
    const element = s[p];
    if (element === "(") {
      stack.push(p);
    } else if (element === ")" && stack.length > 0) {
      stack.pop();
    } else if (element === ")") {
      newString[p] = "";
    }
  }

  while (stack.length) {
    const currIndex = stack.pop();
    newString[currIndex] = "";
  }

  return newString.join("");
};

// time complex: O(n)
// space complex: O(n)

console.log(minRemoveToMakeValid("))(("));
