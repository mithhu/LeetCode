/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let parens = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  
  let stack = [];
  
  for (let ch of s) {
    if (ch in parens) {
      let opening = stack.pop();
      if (opening !== parens[ch]) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  
  return stack.length === 0 ? true: false;
    
};