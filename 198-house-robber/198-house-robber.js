/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let one = 0;  
  let two = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(nums[i] + one, two);
    one = two;
    two = temp;
  }
  return two;    
};
