/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let res = 0;
  let count = 32;
  while (count > 0) {
  if (n & 1 === 1) {
    res++;
  }
    n = n >> 1;
    count--;
  }
  return res;

};