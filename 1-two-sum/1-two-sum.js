/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// I:array nums. int target
// O:return indices that add up to target
// E:

var twoSum = function(nums, target) {
    
    const hash = {}
    
    for(let i = 0 ; i < nums.length;i++){
        
        
        let diff = target - nums[i]
        
       if(diff in hash){
           return [i,hash[diff]]
       }else{
           hash[nums[i]] =i
       }
        
    }
    
    
};