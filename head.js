// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //return undefined;
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return 'incorrect assertion'
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};




function head(arr) {
  return arr[0]
}




// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

