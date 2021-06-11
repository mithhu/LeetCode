/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = new Array(nums.length);
    let resIdx = nums.length - 1;
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            squares[resIdx] = nums[start] * nums[start];
            start++;
        } else {
            squares[resIdx] = nums[end] * nums[end];
            end--;
        } 
        resIdx--;
    }
    
    return squares;
};