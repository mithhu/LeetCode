/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n;
  let fast = n;
  
  while (true) {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
    
    if (slow === fast) {
      break;
    }
  }
  
  return slow === 1;
    
};


function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += (digit * digit);
    n = Math.floor(n / 10);
  }
  
  return sum;

}