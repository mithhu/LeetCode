/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
  
  for (let op of tokens) {
    if (["+", "-", "*", "/"].includes(op)) {
      let second = stack.pop();
      let first = stack.pop();
      let val = getVal(first, second, op);
      stack.push(val);
    } else {
      stack.push(Number(op));
    }
  }
  
  return stack[0];
};

function getVal(first, second, op) {
  switch(op) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      return Math.trunc(first / second);
  }
}