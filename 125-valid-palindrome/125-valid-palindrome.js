/**
 * @param {string} s
 * @return {boolean}
 */

// take string remove uppercase, and non alphanum with regex
// create two pointers , one start one end, move closer to each other. must be equal


var isPalindrome = function(s) {
    if(s.length === 1){
        return true
    }
    
    let regS = s.replace(/\W|_/g,"").toLowerCase()
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