/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = "";
  let resLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    let l = i, r = i;
  
    while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1
      }
      l--;
      r++;
    }
    
    l = i, r = i + 1;
  
    while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1
      }
      l--;
      r++;
    }
  }
  
  return res;
  
  
    
};