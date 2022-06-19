/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let resLen = 0;
  let st = 0;
  let e = 0;
  
  for (let i = 0; i < s.length; i++) {
    //odd
    let l = i;
    let r = i;

    while (l >= 0 && e < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        resLen = r - l + 1;
        st = l;
        e = r;
      }
      l--;
      r++;
    }

    //end
    l = i;
    r = i + 1;

    while (l >= 0 && e < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        resLen = r - l + 1;
        st = l;
        e = r;
      }
      l--;
      r++;
    }
  }
  
  return s.slice(st, e + 1);    
};