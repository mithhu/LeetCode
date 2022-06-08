/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let lastIdx = {};
  for (let i = 0; i < s.length; i++) {
    lastIdx[s[i]] = i;
  }
  
  let res = [];
  let size = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    size++;
    end = Math.max(end, lastIdx[s[i]]);
    
    if (i === end) {
      res.push(size);
      size = 0;
    }
  }
  
  return res;
    
};