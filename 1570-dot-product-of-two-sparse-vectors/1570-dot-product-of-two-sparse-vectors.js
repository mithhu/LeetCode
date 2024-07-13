/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
// var SparseVector = function(nums) {
    
// };

// // Return the dotProduct of two sparse vectors
// /**
//  * @param {SparseVector} vec
//  * @return {number}
//  */
// SparseVector.prototype.dotProduct = function(vec) {
    
// };

class SparseVector {
    constructor(nums) {
        this.nums = []; 
        nums.forEach((num, i) => {
            if (num) {
                this.nums.push([i, num])
            }
        })
    }
    
    dotProduct(vec) {
        let i = 0;
        let j = 0;
        let product = 0;
        
        while (i < this.nums.length && j < vec.nums.length) {
            let [i_idx, i_num] = this.nums[i];
            let [j_idx, j_num] = vec.nums[j];
            
            if (i_idx === j_idx) {
                product += (i_num * j_num);
                i++;
                j++;
            } else if (i_idx < j_idx) {
                i++;
            } else {
                j++;
            }
            
        }
        return product;
    }
    
}

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);