/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let start = 0;
    let end = 0;
    
    while(end < nums.length) {
        if(nums[end] !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
        }
        end++;
    }
    
    return nums;
    
};