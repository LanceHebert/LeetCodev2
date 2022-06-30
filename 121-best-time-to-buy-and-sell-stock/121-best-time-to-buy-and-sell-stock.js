/**
 * @param {number[]} prices
 * @return {number}
 */

// buy day gets checked vs following iterated days,if buy day is greater replace
// if current day - buy day is greater than max profit increase max profit


var maxProfit = function(prices) {
    
    let buyDay = prices[0]
    let maxProfit = 0
    
    for(let i=0;i < prices.length;i++){
        if(buyDay > prices[i]){
            buyDay = prices[i]
        }
        
        if(prices[i]-buyDay > maxProfit){
            maxProfit = prices[i]-buyDay
        }
        
    }
    return maxProfit
    
};