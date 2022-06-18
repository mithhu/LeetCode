/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let start = 0;
  let end = 0;
  let matched = 0;

  let charFreq = {};
  
  for (let ch of s1) {
    if (!(ch in charFreq)) {
      charFreq[ch] = 0;
    }
    charFreq[ch]++;
  }
  
  let len = s1.length;
  
  while (end < s2.length) {
    const rightChar = s2[end];
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;
      if (charFreq[rightChar] >= 0) {
        matched += 1;
      }
    }
    if (matched === len) {  
      return true;
    }
    
    if (end >= s1.length - 1) {
      let leftChar = s2[start];
      start++;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] >= 0) {
          matched -= 1;
        }
        charFreq[leftChar]++;
      }
    }
    
    end++;
  }
  
  return false;
    
};