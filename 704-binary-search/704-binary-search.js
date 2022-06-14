/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0
    let end = nums.length -1 
    let mid = Math.floor((start + end) / 2)
    
    while(nums[mid] !== target && start < end){
            if(nums[mid] > target){
                end = mid - 1
            }else{
                start = mid + 1
            }
          
        mid = Math.floor((start + end) / 2)
          }
    
    if(nums[mid] === target) return mid
    return -1
    
    
    
};