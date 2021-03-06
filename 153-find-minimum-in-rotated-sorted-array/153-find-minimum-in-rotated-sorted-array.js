/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= nums[r]) {
      if (mid === 0 || nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
    
};