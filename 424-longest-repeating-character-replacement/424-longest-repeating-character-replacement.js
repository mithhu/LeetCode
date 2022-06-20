/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let count = {};
  let maxLen = 0;
  let maxF = 0;
  let l = 0;
  
  for (let r = 0; r < s.length; r++) {
    if (!(s[r] in count)) {
      count[s[r]] = 0;
    }
    count[s[r]]++;
    
    maxF = Math.max(maxF, count[s[r]]);
    
    if (r - l + 1 - maxF > k) {
      count[s[l]]--;
      l++;
    }
    
    maxLen = Math.max(r - l + 1, maxLen)
  }
  
  return maxLen;
};