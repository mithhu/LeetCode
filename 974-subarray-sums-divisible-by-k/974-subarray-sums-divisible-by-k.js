/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  
  let freq = Array(k).fill(0);
  freq[0] = 1;
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum % k;
    if (rem < 0) {
      rem += k;
    }
    count += freq[rem];
    freq[rem]++;
  }
  return count;
    
};