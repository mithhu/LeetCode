/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
// var findSmallestInteger = function(nums, value) {
//     const remFreq = Array(value).fill(0);
//     for (let i = 0; i < nums.length; i++) {
//         // let rem = nums[i] % value;
//         let rem = ((nums[i] % value) + value) % value; 
//         remFreq[rem] += 1;
//     }
    
//     for (let i = 0; i < value; i++) {
//         if (remFreq[i] === 0) {
//             return i;
//         }
//     }
       
// };
var findSmallestInteger = function(nums, value) {
    const remFreq = Array(value).fill(0);

    // Count frequencies of remainders modulo value
    nums.forEach(num => {
        // let rem = nums % value;
        let rem = ((num % value) + value) % value; // Ensure non-negative remainders
        remFreq[rem] += 1;
    });

    // Iterate and check for the smallest missing non-negative integer
    for (let i = 0; ; i++) {
        let rem = i % value;
        if (remFreq[rem] === 0) {
            return i;
        }
        remFreq[rem] -= 1;
    }
};

