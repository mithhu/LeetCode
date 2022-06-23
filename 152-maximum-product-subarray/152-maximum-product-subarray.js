/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = 1;
  let max = 1;
  let res = -Infinity;
  
  
  for (let num of nums) {
    let temp = min;
    min = Math.min(num, min * num, max * num);
    max = Math.max(num, temp * num, max * num);
    res = Math.max(max, res);
  }
  
  return res;
  
    
};

