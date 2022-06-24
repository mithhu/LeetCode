/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = [];
  let curr = [];
  
  function backtrack(i) {
    if (i === s.length) {
      res.push([...curr]);
    }
    
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        curr.push(s.slice(i, j + 1));
        backtrack(j + 1);
        curr.pop();
      }
    }
    
  }
  
  backtrack(0);
  return res;
};

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
     return false; 
    }
    i++;
    j--;
  }
  return true;
}