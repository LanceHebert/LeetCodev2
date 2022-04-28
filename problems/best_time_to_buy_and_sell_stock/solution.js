/**
 * @param {number[]} prices
 * @return {number}
 */

// given an array of prices
// want to find maximum day to buy with biggest profit when you sell.

// first we need to check if there is only decreasing numbers edgecase

// 


var maxProfit = function(prices) {
    
   let entry = prices[0]
  let maxProf = 0
  
    
    for(let i = 0;i < prices.length;i++){
        if(entry > prices[i]){
         entry = prices[i]
        }
        
        maxProf = Math.max(maxProf,prices[i]-entry)
    }
    return maxProf
    
    
    
    
};