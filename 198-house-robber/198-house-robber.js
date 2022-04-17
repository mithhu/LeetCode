/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let rob1 = 0, rob2 = 0;
  for (let num of nums) {
    let temp = Math.max(rob2, rob1 + num);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};