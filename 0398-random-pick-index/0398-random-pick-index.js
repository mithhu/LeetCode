/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let count = 0, pickIndex = 0;
    
    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++;
            if (Math.floor(Math.random() * count) + 1 === count) {
                pickIndex = i;
            }
        }
    }
    return pickIndex;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */