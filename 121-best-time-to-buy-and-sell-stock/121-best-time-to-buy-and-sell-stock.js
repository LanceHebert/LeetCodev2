/**
 * @param {number[]} prices
 * @return {number}
 */

// i:array prices o:return max profit,return 0 otherwise e:sorted decreaseing, or empty



var maxProfit = function(prices) {
    
   let buyDay = prices[0]
   let profit = 0
   
   for(let i = 1; i < prices.length;i++){
       if(buyDay > prices[i]){
          buyDay = prices[i]
       }
       
       if(prices[i] - buyDay > profit){
           profit = prices[i] - buyDay
       }
       
   }
    return profit
    
    
};