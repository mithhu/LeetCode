/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx = m + n - 1;
    let idx1 = m - 1;
    let idx2 = n - 1;
    
    while (idx2 >= 0) {
        if (idx1 >= 0) {
            if (nums1[idx1] > nums2[idx2]) {
                nums1[idx] = nums1[idx1];
                idx -= 1;
                idx1 -= 1;
            } else {
                nums1[idx] = nums2[idx2];
                idx -= 1;
                idx2 -= 1;
            }
        } else {
            nums1[idx] = nums2[idx2];
            idx -= 1;
            idx2 -= 1;
        }
    }
    return nums1;
    
    
};