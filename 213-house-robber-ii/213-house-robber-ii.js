/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
};

function helper (nums) {
  let rob1 = 0;
  let rob2 = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(rob2, rob1 + nums[i]);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}

