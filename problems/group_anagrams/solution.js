/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//  array of strings. group the anagrams together return answer in an array of grouped arrays.

//  I want to iterate through the array and separate out each string. Then take that string and split it and sort it. then create a hash where the key is the sorted letters and the value is the original string
// then use Object.values(hash) to display the arrays.


var groupAnagrams = function(strs) {
    let hash = {}
    
    for (let i = 0; i < strs.length;i++){
        let splitSortedString = strs[i].split("").sort()
        console.log(strs[i])
        
        if(hash[splitSortedString]){
            hash[splitSortedString].push(strs[i]) 
        }else{
            hash[splitSortedString] = [strs[i]]
        }
           
        
    }
     return Object.values(hash) 
};