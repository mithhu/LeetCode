/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i < s.length + 1; i++) {
    if (s[i - 1] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i - 1];
    }
    
    if (i - 2 >= 0  && (s[i - 2] === "1" ||
       s[i - 2] === "2" && "0123456".split("").includes(s[i - 1]))
       ) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[dp.length - 1];
  
    
};
