/**
 * @param {number[]} nums
 * @return {number}
 */




var majorityElement = function(nums) {
    
    let numsHash = {}
   
    
    
    for(const number of nums){
        numsHash[number] ? numsHash[number]++ : numsHash[number]=1
        
        if(numsHash[number] > nums.length / 2 ) return number       
    }
    

    
};