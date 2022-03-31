/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
  let res = Math.max(...nums);
  let curMin = 1;
  let curMax = 1;
  
  for (let n of nums) {
    // if (n === 0) {
    //   curMin = 1;
    //   curMax = 1;
    //   continue;
    // }
    let temp = curMax * n;
    curMax = Math.max(n, curMax * n, curMin * n);
    curMin = Math.min(n, temp, curMin * n);
    res = Math.max(res, curMax);
  }
  
  return res;
}