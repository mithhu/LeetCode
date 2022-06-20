/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    const required = target - num;
    if (required in map) {
      return [map[required], i]
    } else {
      map[num] = i;
    }
  }
  
  return -1;
    
};