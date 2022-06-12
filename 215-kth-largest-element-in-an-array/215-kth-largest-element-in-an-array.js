/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  k = nums.length - k;
  
  function quickSelect(l, r) {
    let pivot = nums[r];
    let idx = l;
    
    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        swap(nums, i, idx);
        idx++;
      }
    }
    swap(nums, idx, r); 
    if (idx > k) {
      return quickSelect(l, idx - 1);
    } else if (idx < k) {
      return quickSelect(idx + 1, r)
    } else {
      return nums[idx];
    }
  }
  
  return quickSelect(0, nums.length - 1);
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}