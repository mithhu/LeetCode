/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parens = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  
  let stack = [];
  
  for (let ch of s) {
    if (ch in parens) {
      if (stack.pop() !== parens[ch]) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  
  return stack.length === 0 ? true: false;
    
};