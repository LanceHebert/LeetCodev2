/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    
    let sHash = {}
    
    for(let i = 0 ; i < s.length;i++){
        sHash[s[i]] = sHash[s[i]] + 1 || 1        
    }
   
    
    for(const letter of t){
        
        if(sHash[letter]) sHash[letter]--
        else return false
    }
    return true
    
};