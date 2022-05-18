/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// i=array strs
// o=return array of arrayed up strings


var groupAnagrams = function(strs) {
    
    const hash = {}
    
    for(let i = 0; i<strs.length;i++){
      let stringSplit = strs[i].split("").sort()    
      
      if(!hash[stringSplit]){
      hash[stringSplit] = [strs[i]]      
      }else{
          hash[stringSplit].push(strs[i])
      }
    }
    return Object.values(hash)
};