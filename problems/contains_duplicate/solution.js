/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Array Nums, return bool value true if value appears twice in array.
// Create a hash map with a frequency for each key value. if a value is > 1 there is a duplicate.


var containsDuplicate = function(nums) {
   let hash = {}
   
   for(let i = 0; i < nums.length;i++){
       hash[nums[i]] = (hash[nums[i]] || 0) + 1
   }
    
    for(let i = 0; i < nums.length;i++){
        if(hash[nums[i]] > 1){
            return true
        }
        
    }
    return false
};