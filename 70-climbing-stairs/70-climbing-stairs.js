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
    
    
  let arr = [1,1]
    
    for(let i = 1; i < n;i++){
       const result = arr[0] + arr[1]
       arr[0] = arr[1]
        arr[1]= result
    }
    
    return arr[1]
};