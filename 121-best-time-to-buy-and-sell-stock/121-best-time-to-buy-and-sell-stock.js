/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0;
  let r = 1;
  
  let res = 0;
  
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let profit = prices[r] - prices[l];
      res = Math.max(profit, res);
    } else {
      l = r;
    }
    r++;
  }
  
  return res;
    
};