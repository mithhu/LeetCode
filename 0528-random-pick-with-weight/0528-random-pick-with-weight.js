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
        
        for (let weight of w) {
            prefixSum += weight;
            this.prefixSum.push(prefixSum);
        }
        this.totalSum = prefixSum;
    }

    pickIndex() {
        const target = this.totalSum * Math.random();
        return this.binarySearchHelper(this.prefixSum, target, 0, this.prefixSum.length - 1);
    }

    binarySearchHelper(array, target, left, right) {
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            const potentialMatch = array[middle];
            if (target === potentialMatch) {
                return middle;
            } else if (target < potentialMatch) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        return left;
    }
}

// Example usage:
// const solution = new Solution([1, 3, 4, 6]);
// console.log(solution.pickIndex());
