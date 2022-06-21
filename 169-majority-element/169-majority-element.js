/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = {};
  let res = 0;
  let maxCount = 0;
  
  for (let num of nums) {
    if (!(num in count)) {
      count[num] = 0;
    }
    count[num]++;
    if (count[num] > maxCount) {
      res = num;
      maxCount = count[num];
    }
  }
  
  return res;
};