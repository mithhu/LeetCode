/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let m = s1.length;
  let n = s2.length;
  
  if (m + n !== s3.length) return false;
  
  let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
  dp[m][n] = true;

  for (let i = m; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      if (i < m && s1[i] === s3[i + j]) {
        dp[i][j] = dp[i][j] || dp[i + 1][j]
      }
      if (j < n && s2[j] === s3[i + j]) {
        dp[i][j] = dp[i][j] || dp[i][j + 1]
      }
    }
  }
  return dp[0][0];
};