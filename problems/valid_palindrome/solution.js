/**
 * @param {string} s
 * @return {boolean}
 */

// given string s, return true if it can be read backwards and forwards

// first we need to strip out all "excess" characters that are non alphanumeric with reg ex.

// then we split the entire string into component parts and we can check if a start pointer === end pointer we increment and decrement them each by one until the pointers meet and exit out and return true 

var isPalindrome = function(s) {
    
    let reg = /[\W_]/g 
    let regS = s.toLowerCase().replace(reg,"")
    
    let left = 0
    let right = regS.length - 1
    
    while(left < right){
        if(regS[left] !== regS[right]){
            return false
        }else{
        left++
        right--
        }
        
    }
    return true
    
};























// let reg = /[\W_]/g
//     let str=s.toLowerCase().replace(reg,"")
//     let left =0    
//     let arr = str.split("")
//     let right=arr.length - 1 
    
//     while(left < right){
//         if(arr[left]!==arr[right] )
//             {
//                 return false
//             }
//         left++
//         right--        
//     }
//     return true