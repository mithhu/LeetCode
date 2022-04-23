/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  for (let i = 0; i <= 31; i++) {
    res = res << 1;
    if (n % 2 === 1) {
      res++;
    }
    n = n >>> 1;
  }
  return res >>> 0;
};