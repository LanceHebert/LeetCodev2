/**
 * @param {string} s
 * @return {boolean}
 */

// s is a string
// filter down to just alphanumerics, convert to lowercase
// left and right pointer and move them together checking to see if they equal

var isPalindrome = function(s) {
    let reg = /\W|_/g
    let regS = s.toLowerCase().replace(reg,"")
    
    let left = 0
    let right = regS.length - 1
    
    while(left < right){
        if(regS[left] !== regS[right]){
            return false
        }
        left++
        right--
    }
    return true  
    
};