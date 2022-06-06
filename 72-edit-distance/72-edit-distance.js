/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let m = word1.length + 1;
  let n = word2.length + 1;
  
  let dp = Array(m).fill().map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    dp[0][i] = i;
  }
  
  for (let i = 0; i < m; i++) {
    dp[i][0] = i;
  }
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        let insert = 1 + dp[i][j - 1];
        let del = 1 + dp[i - 1][j];
        let replace = 1 + dp[i - 1][j - 1];
        dp[i][j] = Math.min(insert, del, replace);
      }
    }
  }

  return dp[m - 1][n - 1];
  
    
};