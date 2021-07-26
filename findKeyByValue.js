

function findKeyByValue(showsObj, inputShow) {
  let resultKey = undefined;

  for (let key in showsObj) {
    //console.log(key);
    if (showsObj[key] === inputShow) {
      resultKey = key;
    }
  }
  return resultKey;
}
module.exports = findKeyByValue;
//findKeyByValue(bestTVShowsByGenre, "The Wire");

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //return undefined;
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    //return 'incorrect assertion'
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


