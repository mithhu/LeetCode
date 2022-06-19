/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));
  
  for (let t1 = 1; t1 <= text1.length; t1++) {
    for (let t2 = 1; t2 <= text2.length; t2++) {
      if (text1[t1 - 1] === text2[t2 - 1]) {
        dp[t1][t2] = 1 + dp[t1 - 1][t2 - 1];
      } else {
        dp[t1][t2] = Math.max(dp[t1 - 1][t2], dp[t1][t2 - 1]);
      }
    }
  }
  
  return dp.at(-1).at(-1);
    
};