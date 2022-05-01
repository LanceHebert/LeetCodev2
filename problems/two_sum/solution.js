/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array of nums and target integer, return indices of the two numbers that add up to target

// we are going to iterate through array and take a target minus the current value. As we iterate, we can build a hash of tested values from array. That way when we get to the compiment value the original is already in the hash. When creating the hash we will have the value be the index and the key be the value.


var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i = 0; i < nums.length;i++){
        let diff = target - nums[i]
        
        if(diff in hash){
            return [i,hash[diff]]
        }else{
            hash[nums[i]] = i
        }
        
    }
    
};