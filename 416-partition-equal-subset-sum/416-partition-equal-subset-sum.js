/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const numsVal = nums.reduce((sum, curr) => curr + sum, 0)
  if (numsVal % 2) return false;
  let target = numsVal / 2;
  
  
  let cols = target + 1;
  let rows = nums.length + 1;
  
  let dp = Array(rows).fill().map(() => Array(cols).fill(false));
  
  for (let r = 0; r < rows; r++) {
    dp[r][0] = true;
  }
  
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (nums[r - 1] <= c) {
        dp[r][c] = dp[r - 1][c] || dp[r - 1][c - nums[r - 1]]
      } else {
        dp[r][c] = dp[r - 1][c] ;
      }
    }
  }
  
  return dp[dp.length - 1][dp[0].length - 1]
  
};