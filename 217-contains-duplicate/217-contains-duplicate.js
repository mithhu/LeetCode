/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  
  for (let num of nums) {
    if(!(set.has(num))) {
      set.add(num)
    } else {
      return true;
    }
  }
  
  return false;
    
};