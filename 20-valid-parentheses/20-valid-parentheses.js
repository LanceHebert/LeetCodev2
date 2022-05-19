/**
 * @param {string} s
 * @return {boolean}
 */






// i=string s
// o= return if stringis valid w/ pairs
// edgecase: odd number auto false

var isValid = function(s) {
        
    if(s.length % 2 !== 0){
        return false
    }
    
    const hash = { "(":")","[":"]","{":"}"}
    const stack =[]
    
    for(let char of s){
        
        if(hash[char]){
            stack.push(hash[char])
        }else{
            if( stack.pop() !== char ) return false
        }
    }
    
  return !stack.length
    
};

