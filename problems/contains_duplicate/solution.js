/**
 * @param {number[]} nums
 * @return {boolean}
 */

// array nums, if a value appears twice return true

// interate through the array and set each letter to a hash. Add a frequency counter for its value. 
// if the value is greater than 1 return true, else false.

var containsDuplicate = function(nums) {
    let hash = {}
    
    for(let i = 0; i<nums.length;i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
        
        if(hash[nums[i]] > 1){
            return true
        }
    }
    return false
    
};