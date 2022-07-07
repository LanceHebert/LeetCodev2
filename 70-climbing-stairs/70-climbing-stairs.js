/**
 * @param {number} n
 * @return {number}
 */
// 1,2,3,5
//4
// 1 x4
// 1,2,1
// 2,1,1
// 2,2
// 1,1,2

// next = i-1 + i-2

var climbStairs = function(n) {
    if(n <= 2)return n
    
  let arr = [1,2]
    
    for(let i = 2; i < n;i++){
       arr.push(arr[i-2]+(arr[i-1]))        
    }
    console.log(arr)
    return arr[arr.length-1]
};