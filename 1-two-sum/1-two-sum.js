/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// i=array nums, integer target
// o=return indices of two numbers that add up to target

var twoSum = function(nums, target) {
    const hash = {}
    
    for(let i =0;i<nums.length;i++){
        
        let diff = target - nums[i]
        
        if(diff in hash && hash[diff] !== i){
            return [i,hash[diff]]
        }  
        else{
           hash[nums[i]] = i 
        }
    }
    
};