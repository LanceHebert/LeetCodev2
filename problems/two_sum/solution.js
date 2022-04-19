/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// create an empty hash map, fill with numbers with their index. Take target - current value and find other input, search for that in hash map. 

var twoSum = function(nums, target) {
   let hash = {}
   
   for(let i = 0;i<nums.length; i++)
       {
           hash[nums[i]] = i
       }
   
    for(let i = 0;i<nums.length; i++)
    {
        if((target - nums[i]) in hash && hash[target-nums[i]] !== i )
            {
                return [i,hash[target-nums[i]]]
            }
    }
    
};







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

