/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// array nums, target integer, find target in nums, return index value, otherwise return -1

var search = function(nums, target) {
    
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) /2)
    
    while(nums[mid] !== target && left <= right){
          if(nums[mid] > target){
              right = mid - 1              
          }
        else{
            left = mid + 1
        }
        
        mid = Math.floor((left + right) /2)
        
          }
    if (nums[mid] === target){
     return mid;
   }
return -1;
    
};