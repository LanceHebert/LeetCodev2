/**
 * @param {number[]} nums
 * @return {boolean}
 */

// i:array nums
// o:return true if appears twice,false otherwise

var containsDuplicate = function(nums) {
    
    const hash = {}
    
    for(let i = 0; i<nums.length;i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
        
        if(hash[nums[i]] > 1){
            return true;
        }
    }
    return false
    
};