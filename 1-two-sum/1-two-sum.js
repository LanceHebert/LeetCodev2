/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array nums , int target, return two numbers 



var twoSum = function(nums, target) {
    let numsHash = {}
    
        
    for(let i = 0; i < nums.length; i++){
        
       let dif = target - nums[i]
        
        if(numsHash[dif] != null){
            return [i,numsHash[dif]]
        }else{
            numsHash[nums[i]] = i
        }
    }
};