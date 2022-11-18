/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let currSum = 0;
    
    for (let num of nums) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += num;
        max = Math.max(max, currSum);
    }
    
    return max;
    
};