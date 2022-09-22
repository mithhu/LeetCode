/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let max = 0;
  
  for (let num of nums) {
    let prev = num - 1;
    if (!(set.has(prev))) {
      let count = 0;
      while (set.has(num + count)) {
        count++;
        if (count > max) {
          max = count;
        }
      }
    }
  }
  
  return max;
  
  
  
};