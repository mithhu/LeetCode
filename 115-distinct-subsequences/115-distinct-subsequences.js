/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(text1, text2) {
    let dp = Array(text2.length + 1).fill([]).map(() => Array(text1.length + 1).fill(0));
  
  for (let c = 0; c < text1.length + 1; c++) {
    dp[0][c] = 1;
  }
  
  
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (text2[i - 1] === text1[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }  
  return dp.at(-1).at(-1);

    
    
};