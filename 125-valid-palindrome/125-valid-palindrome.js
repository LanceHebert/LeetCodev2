/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
   let sRep = s.replace(/\W|_/g,"").toLowerCase()
   let start = 0
   let end = sRep.length - 1
   
   while(start < end){
       
       if(sRep[start] !== sRep[end]) return false
       start++
       end--
   }
    return true
};