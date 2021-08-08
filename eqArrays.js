function eqArrays(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (Array.isArray(arrayA[i])) {
     
      if (!eqArrays(arrayA[i], arrayB[i])) {
          return false;
      }
    }
      else if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays([[4],[2, 3]], [[4],[2, 3]])); // => true

// console.log(eqArrays([2, 3],[2, 3])); // => true

// console.log(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   )
// ); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = eqArrays;
