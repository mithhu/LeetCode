/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (sum % 2) {
    return false;
  }
  let target = sum / 2;
  let dp = new Set();
  dp.add(0);
  
  // 0, 1, 0 + 5, 1 + 5
  
  for (let num of nums) {
    let tempSet = new Set([...dp]);
    for (let val of dp) {
      if (val + num === target) {
        return true;
      } else if (val + num < target) {
        tempSet.add(val + num);
      }
    }
    dp = tempSet;
  }
  
  return false;
    
};