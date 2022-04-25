/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// array nums, target integer, find target in nums, return index value, otherwise return -1
// half a left and right point, then have a midpoint , if the midpoint is greater than assign the right to the midpoint and rerun the midpoint. Do this until nums[midpoint] === target or left !<= right, else return -1

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)
    
    while(nums[mid] !== target && left <= right){
        if(nums[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
        mid = Math.floor((left + right) / 2)
        
    }
    if(nums[mid] === target){
            return mid
        }
   
  return -1  
    
};







//     let left = 0
//     let right = nums.length - 1
//     let mid = Math.floor((left + right) /2)
    
//     while(nums[mid] !== target && left <= right){
//           if(nums[mid] > target){
//               right = mid - 1              
//           }
//         else{
//             left = mid + 1
//         }
        
//         mid = Math.floor((left + right) /2)
        
//           }
//     if (nums[mid] === target){
//      return mid;
//    }
// return -1;