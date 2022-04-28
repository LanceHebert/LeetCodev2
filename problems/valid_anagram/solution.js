/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// two strings, s and t. return true if t is anagram of s. false otherwise

// create a hash with frequency counter for s for how many letters it has
// iterate through t and see if it also exists in the S hash. if it does return true. If it doesnt return false


var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false
    }
    
    let hashS = {}
    
    for(let i = 0 ; i < s.length; i++){
        hashS[s[i]] = hashS[s[i]] + 1 || 1
    }
    console.log(hashS)
    for(let letter of t){
        if(!(hashS[letter])){
            return false
        }        
        hashS[letter]--
    }
    return true
    
    
};