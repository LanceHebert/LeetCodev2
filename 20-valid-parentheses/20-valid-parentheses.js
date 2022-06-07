/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false
    }
    const hash ={'(': ')','{':'}','[':']'}
    
    stack = []
    
    for(let i=0;i<s.length;i++){
        if(s[i] in hash){
          stack.push(hash[s[i]])  
        }
        else {
            if(stack.pop() !== s[i]){
            return false
            }    
        }  
    }
    return !stack.length
};