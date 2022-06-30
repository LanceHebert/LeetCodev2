/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start=0 
    let end=nums.length - 1
    let mid = Math.floor((start + end)/2) 
    
    while(start < end && target !== nums[mid]){
        if(target > nums[mid]){
            start = mid + 1
        }else{
            end = mid - 1
        }
        mid = Math.floor((start + end)/2) 
    }
    if(target === nums[mid]){
        return mid
    }
    else return -1
    
};