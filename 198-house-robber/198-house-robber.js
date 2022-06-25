/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let one = nums[0];
  let two = Math.max(one, nums[1]);
  
  for (let i = 2; i < nums.length; i++) {
    let temp = Math.max(nums[i] + one, two);
    one = two;
    two = temp;
  }

  return nums.length === 1 ? one : two;
};