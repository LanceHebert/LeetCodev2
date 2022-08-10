/**
 * @param {number[]} nums
 * @return {number}
 */




var majorityElement = function(nums) {
    
    let numsHash = {}
    let answer=0
    let result = 0
    
    for(const number of nums){
        numsHash[number] ? numsHash[number]++ : numsHash[number]=1
        
        if(numsHash[number] > answer ) answer = numsHash[number]       
    }
    for (let key in numsHash)
    {
        if (numsHash[key] === answer) 
        {
            return  key
        }
    }

    
};