/**
 * @param {number[]} nums
 * @return {boolean}
 */

// array nums

// iterate through the nums array and create a hash map with the value being the frequency of the number from the array. 
// if the nums value is > 2 return true for duplicate

var containsDuplicate = function(nums) {
    let hash = {}
    
    for(let i=0; i<nums.length;i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
        
        if(hash[nums[i]] > 1){
            return true
        }
    }
    return false
    
};