/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    // Step 1: Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Step 2: Calculate the total sum of the array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    // Step 3: Initialize the subsequence and its sum
    let subsequence = [];
    let subsequenceSum = 0;

    // Step 4: Iterate through the sorted array
    for (let num of nums) {
        subsequence.push(num);
        subsequenceSum += num;
        
        // Check if the sum of the subsequence is greater than half of the total sum
        if (subsequenceSum > totalSum - subsequenceSum) {
            break;
        }
    }

    // Step 5: Return the subsequence in non-increasing order
    return subsequence;
}

