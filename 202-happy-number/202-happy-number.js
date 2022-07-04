/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let visit = new Set();
  
  while (!(visit.has(n))) {
    visit.add(n);
    n = sumOfSquares(n);
    
    if (n === 1) {
      return true;
    }
  }
  
  return false;
    
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