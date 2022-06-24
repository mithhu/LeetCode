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
  
  function backtrack(i, currStr) {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }
    
    for (let ch of digitsMap[digits[i]]) {
      backtrack(i + 1, currStr + ch);
    }
  }
  
  if (digits.length) {
    backtrack(0, "");
  }
  
  return res;
  
    
};