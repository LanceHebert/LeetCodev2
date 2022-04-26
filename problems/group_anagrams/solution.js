/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// set up a for loop that iterates through each word. 
// take i and turn that into a hash map. use second pointer to create a second hash map and see if its anagram. 
// If it is, create array and push it together.
// if not increase right counter by one

var groupAnagrams = function(strs) {
    let hash = {}
    let answer=[]
    
    
    
    for(let i = 0; i < strs.length ; i++){
        
        let splitty = strs[i].split("")
        
        splitty.sort()        
       
        
        if(hash[splitty]){
            hash[splitty].push(strs[i]) 
        }
        else{
            hash[splitty] = [strs[i]]
        }
               
    }
   for(let val in hash)
       {
           console.log(hash[val])
            answer.push(hash[val])
       }
    return answer
};

