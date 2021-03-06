/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   if(nums.length === 1)return nums[0]
    
    let subA=nums[0]
    
    for(let i =1;i < nums.length;i++){
        nums[i] = Math.max(nums[i],nums[i-1] + nums[i])
        
        subA = Math.max(subA,nums[i])
    }
    
    return subA
    
};