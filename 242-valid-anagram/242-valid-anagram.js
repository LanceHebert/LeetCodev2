/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// i:strings s and t
// o:return true if t is an anagram

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    const hashS = {}
    
    for(let i = 0; i < s.length;i++){
        hashS[s[i]] = hashS[s[i]] + 1 || 1
        
    }
    
   for(let letter of t){
       if(hashS[letter]){
           hashS[letter]--
       }else{
           return false
       }
   }
    return true
};