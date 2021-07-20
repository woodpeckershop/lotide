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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);