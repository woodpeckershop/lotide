const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    const keysObj1 = Object.keys(object1);
    for (let key of keysObj1) {
      //console.log(Array.isArray(object1[key]));
      if (Array.isArray(object1[key])) {
        // console.log(object1[key]);
        // console.log(object2[key]);
        // console.log(eqArrays(object1[key], object2[key]));
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }

    // for (let key in object1) {
    //   if (object1[key] !== object2[key]) {
    //     return false;
    //   }
    // }
  }

  return true;
};

function eqArrays(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
const abc = {
  a: [1, 2],
  b: 4,
  c: "3",
};

const bac = {
  a: [1, 2],
  b: 4,
  c: 3,
};

console.log(eqObjects(abc, bac)); // => false

//assertEqual(eqObjects(cd, dc), true);
//assertEqual(eqObjects(cd, cd2), false);
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
