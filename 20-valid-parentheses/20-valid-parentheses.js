/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2)return false
    
    let bracket = { "(":')','{':'}','[':']' }
    
    let stack = []
    
    for(let i=0;i<s.length;i++){
        if(s[i] in bracket){
            stack.push(bracket[s[i]])
        }else{
            if(stack.pop() !== s[i]){
                return false
            }
        }
    }
    if(stack.length === 0)return true
    else return false
    
};