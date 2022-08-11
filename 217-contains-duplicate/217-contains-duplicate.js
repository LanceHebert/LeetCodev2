/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let numsHash = {}
    let bool = false
    
    for(const number of nums){
        numsHash[number] ? bool=true : numsHash[number] = 1        
       
    }    
    return bool  
};