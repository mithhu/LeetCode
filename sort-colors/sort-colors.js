/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let idx = 0;
    
    while (idx <= end) {
        if (nums[idx] === 0) {
            swap(nums, idx, start);
            start++;
            idx++;
        } else if (nums[idx] === 2) {
            swap(nums, idx, end);
            end--;
        } else {
            idx++;
        }
    }
    return nums
    
};


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}