/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProf = 0
    let buyday = prices[0]
    
    
    for(let i = 0 ;  i<prices.length;i++){
        if(buyday > prices[i]){
            buyday = prices[i]
        }
        
    if(prices[i]-buyday > maxProf){
       maxProf = prices[i]-buyday
    }
        
    }
    return maxProf
    
};