/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  let dp = {};
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  function dfs(i, j) {
    if (i === s1.length && j === s2.length) {
      return true;
    }

    if (`${i}_${j}` in dp) {
      return dp[`${i}_${j}`];
    }
    
    if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) {
      dp[`${i}_${j}`] = true;
      return dp[`${i}_${j}`];
    }
    
    if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) {
      dp[`${i}_${j}`] = true;
      return dp[`${i}_${j}`];
    }
    dp[`${i}_${j}`] = false;
    return false;
  }
  
  return dfs(0, 0);
};