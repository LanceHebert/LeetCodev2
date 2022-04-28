/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array nums, with target. return indices of two numbers that add up to target.

// Create a hash map with the value being the index.

// I need to take target - iterated value to get difference. Then check if difference exists in the hash. Use that index plus the index that is the value from the hash and return it 


var twoSum = function(nums, target) {
    let hash = {}
    
    for(let i=0;i < nums.length;i++){
        let diff = target - nums[i]
        
        if(hash[diff] != null){
            console.log(hash[diff])
            return ([i,hash[diff]])
        }
        hash[nums[i]] = i
    }
};