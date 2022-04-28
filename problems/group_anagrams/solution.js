/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// array of strings strs. Group anagrams together. return an array of arrays 

// first we need to split each string so we can break it apart into letter components

//in the value for each key which is the pattern of letters set the string so that each key holds an array of strings that match 

// iterate through the hash returning only the values into a big array to hold the smaller arrays

var groupAnagrams = function(strs) {
    let hash = {}
    
    
    for(let i =0;i<strs.length;i++){
        let splitStrs = strs[i].split("")
        splitStrs.sort()
        
        
        
        if(!(splitStrs in hash)){
           hash[splitStrs] = [strs[i]] 
        }
        else{
            hash[splitStrs].push(strs[i])
        }               
    }
    return Object.values(hash)
    
};