// function flatten(arr){
// let newArr = []
// for(let i =0; i< arr.length; i++){
//   if(Array.isArray(arr[i])){

  // function flatten(arr) {
  //   let newArr = [];
  //   arr && arr.forEach(a => {
  //     if (a instanceof Array) {
  //       newArr = newArr.concat(flatten(a));
  //     } else {
  //       newArr.splice(newArr.length, 0, a);
  //     }
  //   });
  //   return newArr;
  // }

  const flatten = function(arr) {
    let output = [];
    for (let e of arr) {
      if (Array.isArray(e)) {
        output = output.concat(flatten(e));
      }
      else {
        output.push(e);
      }
    }
    return output;
  }
  module.exports = flatten;

//   for(let i =0; i< arr.length; i++){
//     if(Array.isArray(arr[i])){
//       const ar = arr[i]

//            // for (let j =0; j< arr.length; j++){
       
//       }
//     }
//   }
//   return arr
// }

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






