/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  let right = nums[nums.length - 1];
  
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] <= right) {
      if (mid === 0 || nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  
  return -1
}