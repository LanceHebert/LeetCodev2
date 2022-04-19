/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Two strings , s,t ,  return true if t is anagram of s . false otherwise
// Create a hashmap of s, run a second for loop that decrements the amount s key has.


var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    
   let hash = {}
   
   for(let i =0; i<s.length;i++){
       hash[s[i]] = (hash[s[i]] || 0) + 1
   }
   
   for(let i =0; i< s.length;i++){
      
        if(!(hash[t[i]]))
        {
          return false
        }
       hash[t[i]]--  
   }
    
   return true
};


//   if (s.length !== t.length) {
//         console.log(false);
//       return false;
//     }
         
//     let sHash = {}
    
//     for(let letter of s)
//         {
//             sHash[letter] = (sHash[letter] || 0) + 1         
            
//         }
    
//     for(let letter  of t)
//         {
//             if(!(sHash[letter])) 
//                 {
//                     return false
//                 }
//             else{
//                 sHash[letter]-- 
//             }
//         }
//     return true