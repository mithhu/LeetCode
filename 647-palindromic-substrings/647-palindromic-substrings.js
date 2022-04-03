/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    //odd
    res += countPalindrome(i, i, s);
    //even
    res += countPalindrome(i, i + 1, s);
    
  }
  
  return res
    
};


function countPalindrome(l, r, s) {
  let res = 0;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    res++;
    l--;
    r++;
  }
  
  return res;
}