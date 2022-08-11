/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let numsHash = {}
    
    for(const number of nums){
        numsHash[number] ? numsHash[number]++ : numsHash[number] = 1  
        
        if(numsHash[number] > 1) return true
    }
    
    return false
    
    
    
};