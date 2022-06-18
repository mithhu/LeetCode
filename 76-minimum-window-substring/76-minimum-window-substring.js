/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0;
  let end = 0;
  let subStart = 0;
  let minLen = Infinity;
  let charFreq = {};
  let matched = 0;
  
  for (let ch of t) {
    if (!(ch in charFreq)) {
      charFreq[ch] = 0;
    }
    charFreq[ch]++;
  }
  
  while (end < s.length) {
    let rightCh = s[end];
    if (rightCh in charFreq) {
      charFreq[rightCh]--;
      if (charFreq[rightCh] >= 0) {
        matched++;
      }
    }
    
    while (matched === t.length) {
      if (minLen > end - start + 1) {
        minLen = end- start + 1;
        subStart = start;
      }
      let leftCh = s[start];
      start++;
      if (leftCh in charFreq) {
        if (charFreq[leftCh] >= 0) {
          matched -= 1;
        }
        charFreq[leftCh]++;
      }
    }
    end++;
  }
  return minLen === Infinity ? "" : s.slice(subStart, subStart + minLen)
  
    
};