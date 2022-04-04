/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0;
  let end = 0;
  let matched = 0;
  let charFreq = {};
  let minLen = Infinity;
  let subStart = 0;
  
  for (let ch of t) {
    if (!(ch in charFreq)) {
      charFreq[ch] = 0;
    }
    charFreq[ch]++;
  }

  
  while (end < s.length) {
    let ch = s[end];
    if (ch in charFreq) {
      charFreq[ch]--;
      if (charFreq[ch] >= 0) {
        matched += 1;
      }
    }
    
    while (matched === t.length) {
      if (minLen > end - start + 1) {
        minLen = end - start + 1;
        subStart = start;
      }
      
      const leftCh = s[start];
      start++;
      if (leftCh in charFreq) {
        if (charFreq[leftCh] === 0) {
          matched -= 1;
        }
        charFreq[leftCh]++;
      }
    }
    
    end++
  }
  
  return minLen === Infinity ? "" : s.substring(subStart, subStart + minLen);
    
};