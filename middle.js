function middle(arr) {
  let midArr = [];
  if (arr.length <= 2) {
    return midArr;
  } else {
    if (arr.length % 2 === 1) {
      midArr.push(arr[(arr.length - 1) / 2]);
    } else if (arr.length % 2 === 0) {
      midArr.push(arr[arr.length / 2] - 1);
      midArr.push(arr[arr.length / 2]);
    }

    return midArr;
  }
}

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

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
