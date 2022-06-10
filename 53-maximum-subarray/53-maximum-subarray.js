/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxNum = nums[0]
    
    for(let i = 1; i < nums.length;i++){
       nums[i] = Math.max(nums[i],nums[i] + nums[i-1])
        maxNum = Math.max(maxNum,nums[i])
    }
    
    return maxNum
    
    
    
    
    
    
    
    
    
//     Brute Force
//    let currentMaxNum =0
//     let maxNum = nums[0]
    
//    for(let i = 0; i < nums.length;i++){
//         currentMaxNum= nums[i]
//         maxNum=Math.max(currentMaxNum,maxNum)
//        if(i+1 !== nums.length){
//            for(let j = i+1; j<nums.length;j++){
//                currentMaxNum += nums[j]
              
//                maxNum=Math.max(currentMaxNum,maxNum)
//            }
//        } else{           
//            return Math.max(currentMaxNum,maxNum)
//        }
//    } 
//     return maxNum    
};