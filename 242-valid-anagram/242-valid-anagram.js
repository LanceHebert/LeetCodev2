/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */




var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false
    }
    const sHash ={}
    
    for(let i = 0; i < s.length; i++){
        sHash[s[i]] = sHash[s[i]] + 1 || 1     
        
    }
    for(let i = 0; i < s.length; i++){
        if(!sHash[t[i]]){
            return false
        }
        sHash[t[i]]--
    }
    return true

    
};