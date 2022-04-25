/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const numsVal = nums.reduce((sum, curr) => curr + sum, 0)
  if (numsVal % 2) return false;
  
  let dp = new Set();
  dp.add(0);
  
  let target = numsVal / 2;
  
  for (let i = 0; i < nums.length; i++) {
    let nextDp = new Set();
    for (let t of dp) {
      if (t + nums[i] === target) {
        return true;
      }
      nextDp.add(t + nums[i]);
      nextDp.add(t);
      
    }
    dp = nextDp;
  }
  
  return dp.has(target)
    
};