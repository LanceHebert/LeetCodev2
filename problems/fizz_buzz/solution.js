/**
 * @param {number} n
 * @return {string[]}
 */


// for loop with the n as the length 
// if % = 0 for 3 and 5 , fizzBuzz
//  if 0 for 3 then fizz
//  if 0 for 5 then Buzz
//  else string string of i
var fizzBuzz = function(n) {
    let arr = []
    
    for (let i = 1; i < n + 1 ; i++ )
        {
            if(i % 3 === 0 && i % 5 === 0)
                {
                   arr.push("FizzBuzz") 
                }
            else if (i % 3 === 0){
                                   arr.push("Fizz") 
            }
            else if (i % 5 === 0){
                                   arr.push("Buzz") 
            }
            else
                {
                    arr.push(`${i}`)
                }
            
        }
    return arr   
};