/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = 0;
  
  function helper(x, n) {
    if (n === 0) {
      return 1;
    }
    

    //even
    if (n % 2 === 0) {
      res = helper(x * x, Math.floor(n / 2));
    } else {
      res = helper(x * x, Math.floor((n - 1) / 2)) * x;
    }
    return res;
  }
  
  res = helper(x, Math.abs(n));
  
  return n >= 0 ? res : 1 / res;
  

    
};