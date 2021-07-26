const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');


// //Tests
// console.log(flatten([1, 2]));
// console.log(flatten([]));
// //console.log(flatten(null));
// console.log(flatten([1, [2, [3, 4, [5,6,7]]]]));
// console.log(flatten([1, [2, 22], [3, 4, [5,6,7]]]));
// console.log(flatten([1, 2, [3, 4], 5, [6]]))


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])