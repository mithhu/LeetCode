/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  
  let idx = 0;
  
  while (idx <= r) {
    if (nums[idx] === 0) {
      swap(idx, l, nums);
      l++;
      idx++;
    } else if (nums[idx] === 2) {
      swap(idx, r, nums);
      r--;
    } else {
      idx++;
    }
  }
    
};

function swap (i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}