/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let a = 0; a <= amount; a++) {
    for (let c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c])
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
    
};