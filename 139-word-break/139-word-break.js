/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1).fill(false);
  dp[s.length] = true;
  
  let words = new Set(wordDict);
  
  for (let i = s.length - 1; i >= 0; i--) {
    for (let word of words) {
      if (i + word.length <= s.length && s.substring(i, i + word.length) === word) {
        dp[i] = dp[i + word.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }
  
  return dp[0];
    
};
