const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //return undefined;
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return 'incorrect assertion'
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function findKey(movieObj, callback) {
  for (let key in movieObj) {
    const bool = callback(movieObj[key]);
    if (bool) {
      return key;
    }
  }
}

// const result = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ); // => "noma"

// assertEqual(result, "noma");

module.exports = findKey;
