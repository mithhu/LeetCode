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
  dp[0][0] = true;
  
  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i >  0 && s1[i - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j]
      }
      if (j > 0 && s2[j - 1] === s3[i + j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1]
      }
    }
  }
  
  return dp.at(-1).at(-1);
}
// var isInterleave = function(s1, s2, s3) {
//   let dp = {};
//   if (s1.length + s2.length !== s3.length) {
//     return false;
//   }
//   function dfs(i, j) {
//     if (i === s1.length && j === s2.length) {
//       return true;
//     }

//     if (`${i}_${j}` in dp) {
//       return dp[`${i}_${j}`];
//     }
    
//     if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) {
//       dp[`${i}_${j}`] = true;
//       return dp[`${i}_${j}`];
//     }
    
//     if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) {
//       dp[`${i}_${j}`] = true;
//       return dp[`${i}_${j}`];
//     }
//     dp[`${i}_${j}`] = false;
//     return false;
//   }
  
//   return dfs(0, 0);
// };