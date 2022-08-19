/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  }
  for (let i = 1; i < nums.length + 1; i++) {
      if (!set.has(i)) {
        return i;
      }
  }
  return nums.length + 1;
  
}
