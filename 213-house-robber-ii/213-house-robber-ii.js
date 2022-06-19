/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  
  return Math.max(nums[0], robHelper(nums.slice(0, nums.length - 1)), robHelper(nums.slice(1)));
    
};

function robHelper(arr) {
  let rob1 = 0;
  let rob2 = 0;
  
  for (let money of arr) {
    let temp = Math.max(money + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}