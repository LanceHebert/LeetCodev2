/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let numsHash ={}
    
    for(num of nums){
        numsHash[num] = numsHash[num] +1 || 1
        
        if(numsHash[num] > 1) return true
    }
    return false
    
};