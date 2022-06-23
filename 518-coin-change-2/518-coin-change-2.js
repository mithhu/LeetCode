/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = Array(coins.length + 1).fill([]).map(() => Array(amount + 1).fill(0));
  for (let r = 0; r < coins.length + 1; r++) {
    dp[r][0] = 1;
  }
  
  for (let c = 1; c < coins.length + 1; c++) {
    for (let a = 1; a < amount + 1; a++) {
      if (coins[c - 1] <= a) {
        dp[c][a] = dp[c - 1][a] + dp[c][a - coins[c - 1]];
      } else {
        dp[c][a] = dp[c - 1][a];
      }
    }
  }  
  return dp.at(-1).at(-1);
    
};