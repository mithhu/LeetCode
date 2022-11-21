/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSortHelper(nums, 0, nums.length - 1);
    return nums;
    
};

function quickSortHelper(nums, start, end) {
    if (start >= end) {
        return;
    }
    
    let p = start;
    let l = start + 1;
    let r = end;
    
    while (l <= r) {
        if (nums[l] > nums[p] && nums[r] < nums[p]) {
            swap(nums, l, r);
            l++;
            r--;
        } 
        if (nums[l] <= nums[p]) {
            l++;
        }
        if (nums[r] >= nums[p]) {
            r--
        }
    }
    swap(nums, r, p);
    let leftArrSmall = r - 1 - start < end - r + 1;
    if (leftArrSmall) {
        quickSortHelper(nums, start, r - 1);
        quickSortHelper(nums, r + 1, end);
    } else {
        quickSortHelper(nums, r + 1, end);
        quickSortHelper(nums, start, r - 1);
    }
}

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}