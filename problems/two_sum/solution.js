/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let otherNum = 0 
    answerArray = []
    
    for (let i=0;i<nums.length;i++)
    {        
         otherNum = target - nums[i]
         if (nums.indexOf(otherNum) !== (-1) && nums.indexOf(otherNum) !== nums.indexOf(nums[i])){
             answerArray.push(i)
             answerArray.push(nums.indexOf(otherNum))
             return answerArray
         }
        else if (nums.indexOf(otherNum) !== (-1) && (nums.indexOf((otherNum),(i+1))) !== -1 )
            {
                answerArray.push(i)
                answerArray.push(nums.indexOf((otherNum),(i+1)))
                return answerArray
            }              
    }
}