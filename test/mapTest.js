const assert = require('chai').assert;
const map   = require('../map');

// describe("#map", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });

//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5'); 
//   });
// });

// assertArraysEqual(
//   map([0, 1, 2, 3, 4], (x) => x + 10),
//   [10, 11, 12, 13, 14]
// );

describe("#map", () => {
  it("returns [10, 11, 12, 13, 14] for [0, 1, 2, 3, 4]", () => {
    assert.deepEqual(map([0, 1, 2, 3, 4], (x) => x + 10), [10, 11, 12, 13, 14]);
  });
})

