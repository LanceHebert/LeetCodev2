/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// i=array nums,integer k
// o=return k most frequent elements


// make a hash with frequencies, sort values of frequencies

var topKFrequent = function(nums, k) {
    
    const hash = {}
   const answer =[]
    
    for(let i = 0; i<nums.length;i++){
        hash[nums[i]] = hash[nums[i]] + 1 || 1
    }
    console.log(hash)
    
   let finalArr = Object.entries(hash).sort(([,a],[,b])=>{return b-a})
   console.log(finalArr)
  for(let i = 0; i < k; i++){
      answer.push(finalArr[i][0])
  }
    
    return answer
};