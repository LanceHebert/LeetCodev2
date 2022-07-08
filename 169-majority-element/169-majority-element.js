/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let numsHash = {}
    let biggest =0
    
    for(let i = 0;i<nums.length;i++){
        numsHash[nums[i]] = numsHash[nums[i]] + 1 || 1
        
        if(numsHash[nums[i]] > biggest){
            biggest = numsHash[nums[i]]
        }       
    }
    
    for (const [key, value] of Object.entries(numsHash)) {
 if(value === biggest) return key
}
    
};