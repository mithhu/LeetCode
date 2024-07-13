/**
 * @param {number[]} w
 */
// var Solution = function(w) {
    
// };

/**
 * @return {number}
 */
// Solution.prototype.pickIndex = function() {
    
// };

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

class Solution {
    constructor(w) {
        this.prefixSum = [];
        let prefixSum = 0;
        for (const weight of w) {
            prefixSum += weight;
            this.prefixSum.push(prefixSum);
        }
        this.maxSum = prefixSum;
    }
    
    pickIndex() {
        const target = Math.random() * this.maxSum;
        let l = 0;
        let r = this.prefixSum.length - 1;
        
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (this.prefixSum[mid] === target) {
                return mid;
            } else if (this.prefixSum[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }
}

