const words = ["ground", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   // temporary code:
//   console.log("array: ", array);
//   console.log("callback: ", callback);

//   const results = [];
//   return results;
// };

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//console.log(results1);

function eqArrays(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

assertArraysEqual(
  map([0, 1, 2, 3, 4], (x) => x + 10),
  [10, 11, 12, 13, 14]
);
