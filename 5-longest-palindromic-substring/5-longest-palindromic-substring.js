/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxLen = 0;
  let st = 0;
  let end = 0;
  
  
  for (let i = 0; i < s.length; i++) {
    //odd
    countPalindromes(i, i, s);
    //even
    countPalindromes(i, i + 1, s);
  }
  
  function countPalindromes(l, r, s) {
    while (l >= 0 && r <= s.length - 1 && s[l] === s[r]) {
      if (r - l + 1 > maxLen) {
        maxLen = r -l + 1;
        st = l;
        end = r;
      }
      l--;
      r++
    }
  }
  
  return s.slice(st, end + 1)
   
};

