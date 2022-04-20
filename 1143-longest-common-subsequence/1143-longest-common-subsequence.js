/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = Array(text1.length + 1).fill().map((row) => Array(text2.length + 1).fill(0));
  
  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      if (text1[r - 1] === text2[c - 1]) {
        dp[r][c] = dp[r-1][c-1] + 1;
      } else {
        dp[r][c] = Math.max(dp[r-1][c], dp[r][c-1]);
      }
    }
  } 
  return dp[dp.length - 1][dp[0].length - 1]

    
};