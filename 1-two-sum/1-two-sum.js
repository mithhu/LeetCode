/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    const desiredVal = target - nums[i];
    
    if (desiredVal in map) {
      return [i, map[desiredVal]];
    }
    map[nums[i]] = i;
  }
    
};