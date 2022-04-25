/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = Array(cost.length).fill(0);
  
  dp[0] = cost[0];
  dp[1] = cost[1];
  
  for (let i = 2; i < dp.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i -2]);
  }
  
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
    
};