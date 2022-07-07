/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if(ransomNote.length > magazine.length) return false
    
    
    const mHash ={}
    
    for(let i = 0 ; i < magazine.length;i++){
        mHash[magazine[i]] = mHash[magazine[i]] + 1 || 1
        
    }
    
    for(let i=0;i < ransomNote.length;i++){
        if(!mHash[ransomNote[i]]){
            return false
        }else{
            mHash[ransomNote[i]]--
        }
    }
    return true
};