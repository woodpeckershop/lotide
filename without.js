// const without = (source, itemsToRemove) => {
//   let filteredArray = [];
//   // if eqArrays returns true, remove all elements and return an empty array
//   if (eqArrays(source, itemsToRemove)) {
//     return filteredArray;
//   }
//   // loop through source, only adding items to filteredArray if they are not present in itemsToRemove 
//   for (item of source) {
//     if (!(itemsToRemove.includes(item))) {
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// }; 


const without = (arr1, arr2) => {
  let filtered = arr1.slice(0)
  
  for(let i = 0; i < arr2.length; i++) {
      for(let j = 0; j < filtered.length; j++) {
          if(arr2[i] === filtered[j]) {
              filtered.splice(j, 1)
              j -= 1
          }
      }
  }
  return filtered
}

// function eqArrays(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   }
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

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without

