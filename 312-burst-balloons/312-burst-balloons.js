/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  let dp = Array(nums.length).fill().map(() => Array(nums.length).fill(-1));
  for (let g = 0; g < dp.length; g++) {
    for (let i = 0, j = g; j < dp.length; i++, j++) {
      
      let max = -Infinity;
      
      for (let k = i; k <= j; k++) {
        let left = k === i ? 0 : dp[i][k - 1];
        let right = k === j ? 0 : dp[k + 1][j];
        let val = (i === 0 ? 1 : nums[i - 1]) * nums[k] * (j === nums.length - 1 ? 1 : nums[j + 1]);
        let total = val + left+ right;
        if (total > max) {
          max = total;
        }
      }
      dp[i][j] = max;
    }
  }  
  return dp[0][dp[0].length - 1]
    
};