/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    //odd
    count += countPalindromes(i, i, s);
    //even
    count += countPalindromes(i, i + 1, s);
  }
  
  return count;
};


function countPalindromes(l, r, s) {
  let res = 0;
  while (l >= 0 && r >= 0 && l < s.length && r < s.length && s[l] === s[r]) {
    res++;
    l--;
    r++;
  }
  
  return res;
}