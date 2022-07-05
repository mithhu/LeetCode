/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let step = k % nums.length;
  if (k === 0) return nums;
  nums.reverse();
  
  swapHelper(nums, 0, step - 1);
  swapHelper(nums, step, nums.length - 1);
    
};

function swapHelper(arr, l, r) {
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}