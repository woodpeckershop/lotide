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





module.exports = without

