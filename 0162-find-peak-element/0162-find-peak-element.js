/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midVal = nums[mid];
        const leftVal = mid > 0 ? nums[mid-1] : -Infinity;
        const rightVal = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;
        
        if (midVal > leftVal && midVal > rightVal) {
            return mid;
        }
        if (midVal > leftVal && midVal < rightVal) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    
};