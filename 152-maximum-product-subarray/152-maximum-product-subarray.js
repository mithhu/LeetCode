/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  let res = -Infinity;
  let curMin = 1;
  let curMax = 1;
  
  for (let n of nums) {
    let temp = curMax * n;
    curMax = Math.max(n, curMax * n, curMin * n);
    curMin = Math.min(n, temp, curMin * n);
    res = Math.max(res, curMax);
    console.log(curMax, curMin, res)
  }
  
  return res;
}