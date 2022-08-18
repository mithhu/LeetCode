/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let l = 1;
  let r = num;
  
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    let squaredVal = mid * mid;
    if (squaredVal > num) {
      r = mid - 1;
    } else if (squaredVal < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};