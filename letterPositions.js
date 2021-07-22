const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      console.log(sentence[i]);
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
        // console.log(results);
      } else {
        results[sentence[i]] = [i];
      }
      //console.log(sentence[i]);

      // for (let char of sentence) {
      //   if (char !== " ") {
      //     //console.log(char);
      //    // console.log(results[char]);
      //     if (results[char]) {
      //       results[char].push(sentence.indexOf(char));
      //     } else {
      //       results[char] = [sentence.indexOf(char)];
      //     }
    }
  }
  //console.log(results);
  return results;
};

const result1 = letterPositions("helllllo");

console.log(result1);

// function eqArrays(arrayA, arrayB) {
//   for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertArraysEqual(result1["h"], [0]);
// assertArraysEqual(result1["e"], [1]);
// assertArraysEqual(result1["l"], [2, 3]);
// assertArraysEqual(result1["o"], [4]);
