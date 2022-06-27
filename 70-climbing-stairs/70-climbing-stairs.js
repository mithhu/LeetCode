/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  let one = 1; //1
  let two = 2; //2
  
  for (let i = 3; i < n + 1; i++) {
    let temp = two;
    two = one + two;
    one = temp;
  }
  return two;
    
};