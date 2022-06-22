/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let digitsMap = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }
  let res = [];
  
  function dfs(idx, currStr) {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }
    
    for (let char of digitsMap[digits[idx]]) {
      dfs(idx + 1, currStr + char)
    }
  }
  
  if (digits.length) {
    dfs(0, "");
  }
  
  return res;
  
    
};