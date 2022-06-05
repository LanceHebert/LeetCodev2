/**
 * @param {number[]} nums
 * @return {boolean}
 */

// i:array nums , O:return bool , E:,


var containsDuplicate = function(nums) {
    
    const hash = {}
    
    for(let i = 0 ; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
        
        if(hash[nums[i]] > 1){
            return true
        }
    }
    return false
    
};