/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// array of nums, and target . return the indices that add up to target

// target - num = diff, iterate through the array. At each value take target - nums[i] = diff. see if diff is in hash, if it is return the indexs. If it is not create the hash with the index as teh value.

var twoSum = function(nums, target) {
    
    let hash ={}
    
    for(let i = 0; i < nums.length;i++){
        let diff = target - nums[i]
        
        if(diff in hash){
            return [i,hash[diff]]
        }
        hash[nums[i]]=i
    }
};




























//    let hash = {}
   
//    for(let i = 0;i<nums.length; i++)
//        {
//            hash[nums[i]] = i
//        }
   
//     for(let i = 0;i<nums.length; i++)
//     {
//         if((target - nums[i]) in hash && hash[target-nums[i]] !== i )
//             {
//                 return [i,hash[target-nums[i]]]
//             }
//     }










// var twoSum = function(nums, target) {
//   let hash = {}
//   let diff = 0
//   let answer =[]
  
//   for(let i = 0; i < nums.length ; i++)
//     {
//         hash[nums[i]]= i
//     }
//     console.log(hash)
    
//     for(let i = 0; i < nums.length ; i++)
//         {
//           diff = target - nums[i]
            
//               if(diff in hash && i !== hash[diff])
//                 {
//                 return answer=[i,hash[diff]]                    
//                 }        
//         }    
   
// };

//  var twoSum = function (nums, target) {
//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (target - nums[i] in obj) {
//       return [obj[target - nums[i]], i]
//     } else {
//       obj[nums[i]] = i;
//     }
//   }
// };

