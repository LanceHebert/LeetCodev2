/**
 * @param {number[]} nums
 * @return {number}
 */

//we will store largest num, compare num1 vs next + num1 take max
var maxSubArray = function(nums) {
    
    let largest = nums[0]
    
    
    for(let i = 1; i < nums.length;i++){
        nums[i] = Math.max(nums[i],nums[i] + nums[i-1])
        
        largest = Math.max(largest,nums[i])
        
    }
    return largest
    
    
    
};