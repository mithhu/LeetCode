/**
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(num) {
  let stack = [];
  let res = [];
  
  function backTrack(open, close) {
    if (open === num && close === num) {
      res.push(stack.join(""));
      return;
    }
    
    if (open < num) {
      stack.push("(");
      backTrack(open + 1, close)
      stack.pop("(");
    }
    
    if (close < open) {
      stack.push(")");
      backTrack(open, close + 1)
      stack.pop(")");
    }
  }
  
  backTrack(0, 0);
  return res;
}
