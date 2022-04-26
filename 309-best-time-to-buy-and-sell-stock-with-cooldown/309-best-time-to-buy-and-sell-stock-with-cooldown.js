/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = {};
  
  function dfs(i, canBuy) {
    if (i >= prices.length) {
      return 0;
    }
    if (`${i}*${canBuy}` in dp) {
      return dp[`${i}*${canBuy}`];
    }
    
    if (canBuy) {
      let buy = dfs(i + 1, !canBuy) - prices[i];
      let cooldown = dfs(i + 1, canBuy);
      dp[`${i}*${canBuy}`] = Math.max(cooldown, buy);
    } else {
      let sell = dfs(i + 2, !canBuy) + prices[i];
      let cooldown = dfs(i + 1, canBuy);
      dp[`${i}*${canBuy}`] = Math.max(cooldown, sell);
    }
    return dp[`${i}*${canBuy}`];
  }
  
  return dfs(0, true);
    
};