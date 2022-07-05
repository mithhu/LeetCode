/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r]) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
  }
  
  return nums;
    
};