/**
 * @param {string} s
 * @return {boolean}
 */




var isPalindrome = function(s) {
    
    
    let reg = s.replace(/\W|_/g,"")
    let sReg = reg.toLowerCase()
   
    let left = 0
    let right = sReg.length - 1
    
    while(left < right){
        if(sReg[left] !== sReg[right]){
            return false
        }
        left++
        right--
    }
    return true
    
};