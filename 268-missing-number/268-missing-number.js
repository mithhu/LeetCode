/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let res = nums.length; // -1 + 3
  
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  
    return res;
};