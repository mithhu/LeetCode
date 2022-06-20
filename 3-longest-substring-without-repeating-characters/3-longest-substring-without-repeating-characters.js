/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  
  let l = 0;
  let r = 0;
  let res = 0;
  
  while (r < s.length) {
    while(set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    
    set.add(s[r]);
    res = Math.max(r - l + 1, res);
    r++;
  }
  return res;
};