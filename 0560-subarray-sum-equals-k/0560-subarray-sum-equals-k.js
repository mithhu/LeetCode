/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSum = 0;
    let res = 0;
    let prefixMap = new Map();
    prefixMap.set(0, 1);
    
    // prefixSum - sum = k
    
    for (let num of nums) {
        prefixSum += num;
        const potentialAns = prefixSum - k;
        if (prefixMap.has(potentialAns)) {
            res += prefixMap.get(potentialAns);
        }
        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1)
    }
    
    return res
    

    
};