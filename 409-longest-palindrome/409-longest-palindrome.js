/**
 * @param {string} s
 * @return {number}
 */

// put everything in a hash,check if there are 2 in there and increase a counter


var longestPalindrome = function(s) {
   
    let palHash = {}
    let length = 0
    
    for(let i =0; i < s.length;i++){
        palHash[s[i]] = palHash[s[i]] + 1 || 1
        
        if(palHash[s[i]] % 2 === 0){
            length += 2
        }
    }
    
    if(s.length > length){
        return length + 1
    }else{
        return length
    }
    
};