/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(text1, text2) {
  let C = text1.length;
  let R = text2.length;
    let dp = Array(R + 1).fill([]).map(() => Array(C + 1).fill(0));
  
  for (let c = 0; c < C + 1; c++) {
    dp[0][c] = 1;
  }
  
  for (let r = 1; r < R + 1; r++) {
    for (let c = 1; c < C + 1; c++) {
      if (text2[r - 1] === text1[c - 1]) {
        dp[r][c] = dp[r - 1][c - 1] + dp[r][c - 1];
      } else {
        dp[r][c] = dp[r][c - 1];
      }
    }
  }  
  return dp.at(-1).at(-1);

    
    
};