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
