/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//     create an object and find frequency of each letter in str1, then loop through str2 and subtract each letter from str1 based on what str2 is
    
    freq1 = {}
    
    if(s.length !== t.length){
        return false
    }
    
    for (let val of s)
        {
            freq1[val] = (freq1[val] || 0) + 1
        }
    console.log(freq1)
    
    for(let val of t)
        {
            if(!(freq1[val]))
                {
                    return false
                }
            
            freq1[val] -= 1
        }
    return true
};