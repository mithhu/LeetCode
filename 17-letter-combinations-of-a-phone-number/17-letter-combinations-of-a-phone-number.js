/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let digitToChar = { "2": "abc",
                        "3": "def",
                        "4": "ghi",
                        "5": "jkl",
                        "6": "mno",
                        "7": "qprs",
                        "8": "tuv",
                        "9": "wxyz" }
  let res = [];
  
  function dfs(i, curStr) {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }
    
    
    for (let c of digitToChar[digits[i]]) {
      dfs(i + 1, curStr + c)
    }
    
  }
  
  if (digits.length) {
    dfs(0, "") 
  }
  
  return res; //[]
    
};