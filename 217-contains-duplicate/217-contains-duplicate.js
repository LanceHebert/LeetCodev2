/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
//     let numsHash = {}
//     let bool = false
    
//     for(const number of nums){
//         numsHash[number] ? bool=true : numsHash[number] = 1         
//     }    
//     return bool  
    
    let set = new Set()
    
    for(const number of nums){
        if(set.has(number)) return true
        else set.add(number)
    }
    return false
    
};