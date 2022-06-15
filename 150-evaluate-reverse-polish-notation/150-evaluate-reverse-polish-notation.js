/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  
  for (let ch of tokens) {
    if (["+", "-", "/", "*"].includes(ch)) {
      let right = stack.pop();
      let left = stack.pop();
      let val = getVal(ch, Number(left), Number(right));
      stack.push(val);
    } else {
      stack.push(ch);
    }
  }
  
  return stack[0];
  
    
};

function getVal(ch, left, right) {
  switch(ch) {
    case "+":
      return left + right;
    case "*":
      return left * right;
    case "-":
      return left - right;
    case "/":
      return Math.trunc(left / right);
    default:
      break;
  }
    
}