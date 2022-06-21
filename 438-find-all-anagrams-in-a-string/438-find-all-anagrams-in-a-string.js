/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
    

  
var findAnagrams = function(s, p) {
  let start = 0, end = 0, matched = 0;
  const charFreq = {}; 
  const result = [];
 
  //pattern freq
  for (let chr of p) {
    if (!(chr in charFreq)) {
      charFreq[chr] = 0;
    }
    charFreq[chr]++;
    
  }
  
  while (end < s.length) {
    const rightChar = s[end];
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;
      if (charFreq[rightChar] >= 0) {
        matched += 1;
      }
    }
    
    
    
    if (matched === p.length) {
      result.push(start)
    }
    
    
    if (end >= p.length - 1) {
      const leftChar = s[start];
      start++;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] >= 0) {
          matched -= 1;
        }
        charFreq[leftChar] += 1;
      }
    }
    
    end++;
  }
  
  return result;
    
};