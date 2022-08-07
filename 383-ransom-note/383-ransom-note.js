/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


// make a hash store letters from magazine, iterate and minus those from ransomnote

var canConstruct = function(ransomNote, magazine) {
    
    let magHash = {}
    
    
    for(let i = 0 ; i < magazine.length ; i++){
        magHash[magazine[i]] = magHash[magazine[i]] + 1 || 1
    }
    console.log(magHash)
    
    for(let i = 0 ; i < ransomNote.length ; i++){
        if(magHash[ransomNote[i]]) magHash[ransomNote[i]]--
        else return false
    }
    return true
};