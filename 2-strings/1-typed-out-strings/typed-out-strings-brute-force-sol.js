const buildString = (string) => {
  let builtString = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "#") builtString.push(string[i]);
    else builtString.pop();
  } 

  return builtString
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let firstStringFormatted = buildString(s);
  let secondStringFormatted = buildString(t);

  if (firstStringFormatted.length !== secondStringFormatted.length)
    return false;

  for (let pointer = 0; pointer < firstStringFormatted.length; pointer++) {
    if (firstStringFormatted[pointer] !== secondStringFormatted[pointer]) {
      return false
    }
  }
  return true

  // While solution
  // let pointer = 0;
  // let stringsAreEqual = true;
  
  // while (pointer < firstStringFormatted.length) {
  //   console.log("pointer :", pointer);
  //   console.log('stringsAreEqual :', stringsAreEqual);
  //   if (firstStringFormatted[pointer] !== secondStringFormatted[pointer]) {
  //     stringsAreEqual = false
  //     break;
  //   }
  //   pointer++;
  // }
  // return stringsAreEqual;
};

// time complex: O(n)
// space complex: O(n)

console.log(backspaceCompare("abcd", "bbcd"));
// console.log(backspaceCompare("ab##", "c#d#"));
