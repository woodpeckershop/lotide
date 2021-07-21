// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     //return undefined;
//     console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     //return 'incorrect assertion'
//     console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function (str) {
  let result = {};
  str = str.replace(/\s/g, "");
  for (let char of str) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
