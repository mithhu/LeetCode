/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let curMax = 1;
  let curMin = 1;
  let res = -Infinity;
  
  for (let num of nums) {
    let tempMax = curMax * num;
    curMax = Math.max(num, tempMax, curMin * num);
    curMin = Math.min(num, tempMax, curMin * num);
    res = Math.max(curMax, res);
  }
  return res;
    
};