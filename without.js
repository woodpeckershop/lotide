const without = (arr1, arr2) => {
  let filtered = arr1;

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (filtered[j] === arr2[i]) {
        filtered.splice(j, 1);
        j -= 1;
      }
    }
  }
  return filtered;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
