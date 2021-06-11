/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start, end;
    for (start = 0; start < nums.length - 1; start++) {
        if(nums[start] > nums[start+1]) {
            break;
        }
    }
    
    if (start === nums.length-1) return 0;
    
    for (end = nums.length - 1; end > 0; end--) {
        if (nums[end] < nums[end-1]) {
            break;   
        }
    }
    
    let max = -Infinity;
    let min = Infinity;
    
    for (let i=start; i<=end; i++) {
        if(nums[i] > max) {
            max = nums[i]
        }
    }
    
     for (let i=end; i>=start; i--) {
        if(nums[i] < min) {
            min = nums[i]
        }
    }
    
    while (start > 0 && nums[start-1] > min) {
        start--;
    }
    
    while (end < nums.length-1 && nums[end+1] < max) {
        end++;
    }
    
    return end - start +1;
    
};