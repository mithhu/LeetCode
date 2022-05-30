/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let one = 1;
  let two = 1;
  
  for (let i = 2; i < n + 1; i++) {
    let temp = two;
    two = one + two;
    one = temp;
  }
  
  return two;
    
};