/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let sHash = {'(':')','{':'}','[':']'}    
    let stack = []
    
    for(let i = 0;i<s.length;i++){
       if(s[i] in sHash){
           stack.push(sHash[s[i]])
           
       } else{
           if(stack.pop() !== s[i]) return false
       }
        
    }
    
   if(stack.length !== 0) return false
   else return true
   
};