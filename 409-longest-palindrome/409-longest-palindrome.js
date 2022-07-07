/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return 1
    let sHash ={}
    let counter = 0
    
    for(let i = 0;i<s.length;i++){
        //build hash
        sHash[s[i]] = 1 + sHash[s[i]] || 1  
        //check to see if even number, increase counter if so
        if(sHash[s[i]] % 2 === 0) counter++ 
    }
    
    console.log(sHash)    
    
    //
    if((counter*2) < s.length) return counter*2 +1
    else return counter*2
    
};   