/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Array Nums, return bool value true if value appears twice in array.
//  create a hash map, iterate through and set a frequency value to each key. If greater than 2 return true


var containsDuplicate = function(nums) {
    let hash = {}
    
    for(let i = 0; i < nums.length;i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1 
        
        if(hash[nums[i]] > 1){
            return true
        }
        
    }
    
    return false
    
};