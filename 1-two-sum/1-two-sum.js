/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    const desiredNum = target - nums[i];
    
    if (desiredNum in map) {
      return [map[desiredNum], i];
    } else {
      map[nums[i]] = i;
    }
  }
  
  return false;
    
};