// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function (allItems, itemsToCount) {
//   let countObj = {};
//   for (const key in itemsToCount) {
//     if (itemsToCount[key]) {
//       countObj[key] = 0;
//       // console.log(countObj[key]);

//       for (const item of allItems) {
//         if (item === key) {
//           countObj[item]++;
//         }
//       }
//     }
//   }

//   for (const key in countObj) {
//     if (countObj[key] === 0) {
//       countObj[key] = undefined;
//     }
//   }

//   //console.log(countObj);
//   return countObj;
// };

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      //console.log(item);
    }
  }

  return results;
};





module.exports = countOnly;
