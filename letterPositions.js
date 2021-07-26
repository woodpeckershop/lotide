const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
        // console.log(results);
      } else {
        results[sentence[i]] = [i];
      }
      //console.log(sentence[i]);

      // for (let char of sentence) {
      //   if (char !== " ") {
      //     //console.log(char);
      //    // console.log(results[char]);
      //     if (results[char]) {
      //       results[char].push(sentence.indexOf(char));
      //     } else {
      //       results[char] = [sentence.indexOf(char)];
      //     }
    }
  }
  //console.log(results);
  return results;
};





module.exports = letterPositions
