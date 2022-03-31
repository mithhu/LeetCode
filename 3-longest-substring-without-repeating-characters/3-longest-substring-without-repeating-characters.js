/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let l = 0;
  let r = 0;
  
  const map = {};
  
  while (r < s.length) {
    if (s[r] in map) {
      l = Math.max(map[s[r]] + 1, l);
    }
    map[s[r]] = r;
    res = Math.max(res, r - l + 1);
    r++;
  }
  
  return res;
};

