/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let res = [];
    if (nums.length === 0) {
        res.push([lower, upper]);
        return res;
    }
    if (nums[0] !== lower) {
        res.push([lower, nums[0] - 1]);
    }
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1) {
            res.push([nums[i - 1] + 1, nums[i] - 1])
        }
    }
    
    
    
    if (nums[nums.length - 1] !== upper) {
        res.push([nums[nums.length - 1] + 1, upper]);
    }
    
    return res;
    
};