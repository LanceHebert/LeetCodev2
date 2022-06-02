/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(str1, str2) {
   
  //splitting the strings into characters in preparation for merge
  const splitStr1 = str1.split("");
  const splitStr2 = str2.split("");
  
  //trackers to keep knowledge of spot
  let spot1 = 0; 
  let spot2 = 0;
  //Array to hold the merged characters
  const answer = []; 
  
// iterating the amount needed to cover both strings
  for (let i = 0 ; i < str1.length + str2.length; i++) {    
//     checking if both strings spotter exists 
    if (splitStr1[spot1] && splitStr2[spot2]) {
//       checking even vs odd to switch between strings and increase the spot for next iteration
      if (i % 2 !== 0) {
        answer.push(splitStr2[spot2]);
        spot2++;
      } else {
        answer.push(splitStr1[spot1]);
        spot1++;
      }
    }    
//     checking that if we have run out of one string, just fill in the rest with the other string
    if (!splitStr1[spot1] && splitStr2[spot2]) {
      answer.push(splitStr2[spot2]);
      spot2++;
    }
    if (!splitStr2[spot2] && splitStr1[spot1]) {
      answer.push(splitStr1[spot1]);
      spot1++;
    }
  }
//   finally returning the joined array as a string
  return answer.join("");
}
