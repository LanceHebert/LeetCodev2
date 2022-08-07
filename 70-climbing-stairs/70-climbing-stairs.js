/**
 * @param {number} n
 * @return {number}
 */

//  1 2 3 5 8 13
// last two values added together = new value, store last two values and add 
// i -1 + i-2 = temp

var climbStairs = function(n) {
    
    if(n < 3) return n
    
    
   let num1 = 1
   let num2 = 2
   let sum = 0
    
    for(let i=2;i < n;i++){
        sum=num1 + num2
        num1=num2
        num2=sum
    }
    return sum
    
};