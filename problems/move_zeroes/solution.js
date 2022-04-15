/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let left = 0 //1
  let right = left + 1 //2
  
 while (right < nums.length){      
     
     if(nums[left] !== 0){
         left++                    
     }
     else if(nums[left] === 0 && nums[right] !== 0 )
         {
            nums[left] = nums[right]
             nums[right]= 0
             left++             
         }
         right++     
 }
  return nums
};