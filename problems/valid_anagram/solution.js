/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//     create an object and find frequency of each letter in str1, then loop through str2 and subtract each letter from str1 based on what str2 is
    
    
     if (s.length !== t.length) {
        console.log(false);
      return false;
    }
         
    let sHash = {}
    
    for(let letter of s)
        {
            sHash[letter] = (sHash[letter] || 0) + 1         
            
        }
    
    for(let letter  of t)
        {
            if(!(sHash[letter])) 
                {
                    return false
                }
            else{
                sHash[letter]-- 
            }
        }
    return true
   
};