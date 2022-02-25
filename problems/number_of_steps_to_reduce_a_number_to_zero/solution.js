/**
 * @param {number} num
 * @return {number}
 */


// temporary holding variable, hold a counter, Take num % 2 === 0 then num  / 2  else  num -1  -> divide by 2, take that answer and put into a temp variable,

// do while temp number > 0




var numberOfSteps = function(num) {
    
    let counter = 0
    
    do{
        if(num===0){
            return counter = 0
        }
        else if(num  % 2 > 0){
           num = num - 1
            counter++           
        }else
            {
                num = num / 2
                counter++
            }
    }while(num > 0)
        return counter;
    
};