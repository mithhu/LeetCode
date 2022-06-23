/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let cache = {};
  
  function backtrack(i, total) {
    if (i === nums.length) {
       return total === target ? 1 : 0;
    }
    
    if (`${i}_${total}`in cache) {
      return cache[`${i}_${total}`];
    }
    
    cache[`${i}_${total}`] = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);
    return cache[`${i}_${total}`];
  }
  
  return backtrack(0, 0);

    
};