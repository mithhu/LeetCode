/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let rob1 = robValue(nums.slice(0, nums.length - 1));
  let rob2 = robValue(nums.slice(1));
  
  return Math.max(nums[0], rob1, rob2);
    
};

function robValue(nums) {
  let one = 0;
  let two = 0;

  
  for (let num of nums) {
    let temp = Math.max(num + one, two);
    one = two;
    two = temp;
  }
  return two;
}


// 1 2 3 4 5 6 9