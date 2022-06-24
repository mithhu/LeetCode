/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let start = 0;
  let end = 0;
  let maxCount = 0;
  let res = 0;
  let map = {};
  
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!(ch in map)) {
      map[ch] = 0;
    }
    map[ch]++;
    maxCount = Math.max(map[ch], maxCount);
    
    
    if (i - start + 1 - maxCount > k) {
      map[s[start]]--;
      start++
    }
    
    res = Math.max(res, i - start + 1);    
  }
  
  return res;
    
};

// AABABBA

// A: 3
// B: 1

// ch: 4 - maxChar <= k