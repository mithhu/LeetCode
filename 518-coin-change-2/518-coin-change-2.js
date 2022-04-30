/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let cols = amount + 1;
  let rows = coins.length + 1;
  
  let dp = Array(rows).fill().map(() => Array(cols).fill(0));

  // console.log(dp)
  
  // for (let i = 0; i < cols; i++) {
  //   dp[0][i] = 0;
  // }
  for (let i = 0; i < rows; i++) {
    dp[i][0] = 1;
  }

  console.log(dp)
  
  
  
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (coins[r - 1] <= c) {
        dp[r][c] = dp[r - 1][c] + dp[r][c - coins[r - 1]]
      } else {
        
        dp[r][c] = dp[r - 1][c] 
      }
    }
  }
  console.log(dp)
  return dp[rows - 1][cols - 1]
  
    
};