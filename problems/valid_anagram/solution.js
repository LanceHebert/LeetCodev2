/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// two strings, s and t, if t anagram of s return true. Otherwise false

// iterate through s and create a hash, iterate through t and check if t values exist in hash of s. if they do decrement their value


var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false
    }
    
    
    let hashS = {}
    
    for(let i = 0 ; i < s.length; i++){
        hashS[s[i]] = hashS[s[i]] + 1 || 1
    }
    
    for(let i = 0; i < t.length;i++){
        if(!hashS[t[i]]){
            return false
        }
        hashS[t[i]]--
    }
    return true
};