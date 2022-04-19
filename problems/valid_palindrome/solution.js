/**
 * @param {string} s
 * @return {boolean}
 */

// Given a string, convert all uppercase to lwoer, get rid of any spaces or symbols. check if palindrome, return true or false.

// will probably have to loop through and create a clean string, checking each time if alphanumeric or not. Could do quick check by making a hash map and seeing if modulo 2 is 0 for each key.

// set up left and right pointer, while loop left < right, check left vs right incrementing each time.

var isPalindrome = function(s) {
    let reg = /[\W_]/g
    let str=s.toLowerCase().replace(reg,"")
    let left =0    
    let arr = str.split("")
    let right=arr.length - 1 
    
    while(left < right){
        if(arr[left]!==arr[right] )
            {
                return false
            }
        left++
        right--        
    }
    return true
    
};