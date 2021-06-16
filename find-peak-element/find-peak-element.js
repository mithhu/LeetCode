/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while( left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        let leftVal = mid > 0 ? nums[mid - 1] : -Infinity;
        let rightVal = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;
        
        if (leftVal < nums[mid] && rightVal > nums[mid]) {
            left = mid + 1;
        } else if (leftVal > nums[mid] && rightVal < nums[mid]) {
            right = mid - 1;
        } else if (leftVal > nums[mid] && rightVal > nums[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
        
    }
    return -1;
    
};