/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let longest = 0;
  let set = new Set(nums);
  
  for (let num of nums) {
    //check if it's the start
    if (!(set.has(num - 1))) {
      let len = 0;
      while (set.has(num + len)) {
        len++;
      }
      longest = Math.max(longest, len);
    }
  
  }
  return longest
  
    
};