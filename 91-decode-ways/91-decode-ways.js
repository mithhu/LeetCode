/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = Array(s.length + 1).fill(0);
  dp[dp.length - 1] = 1;
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i + 1];
    }
    
    if (i + 1 < s.length && (s[i] === "1" ||
       s[i] === "2" && "0123456".split("").includes(s[i + 1]))
       ) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
  
    
};