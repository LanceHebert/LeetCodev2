/**
 * @param {number[]} prices
 * @return {number}
 */

// given array of price, pick single day to buy and then different day in future to sell. return maximum profit from this transaction
// array = prices,prices[i] current day 
// first day to buy , the last day to sell to maximize profit

// current value and then search for the sell day through the array
// 

var maxProfit = function(prices) {
  let profit = 0;
  let entry = prices[0];
    
  for(let i = 1 ; i < prices.length; i++ ){
     if(entry > prices[i]){
         entry = prices[i]
     } 
     else{
        profit = Math.max(profit, prices[i] - entry) 
     } 
  }  
    return profit    
};
//     profit = 4, entry = 1