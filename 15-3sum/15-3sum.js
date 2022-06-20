/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let triplets = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) {
      i++;
    }
    let l = i + 1;
    let r = nums.length - 1;
    
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  
  return triplets;
  
    
};