/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length -1;
  
  let res = nums[0];
  
  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(nums[l], res);
      break;
    }
    
    let mid = l + Math.floor((r - l) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[l] <= nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1
    }
  }
  
  return res;
    
};