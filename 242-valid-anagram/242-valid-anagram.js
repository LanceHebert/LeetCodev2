/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// i:two strings s and t
// O:return true if anagram
// e:need to be same length


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    const sHash = {}
    
    for(let i = 0; i < s.length; i++){
        sHash[s[i]] = sHash[s[i]] + 1 || 1   
        
    }
    
    for(let letter of t){
        if(sHash[letter]){
            sHash[letter]--
        }else{
            return false
        }
    }

    
   
    
    return true
};