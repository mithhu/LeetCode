/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxSoFar = 0;
    let max = -Infinity;
    
    for (let i=0; i<nums.length; i++) {
        maxSoFar = Math.max(maxSoFar + nums[i], nums[i])
        if(maxSoFar > max) {
            max = maxSoFar
        }
    }
    
    return max;
    
};