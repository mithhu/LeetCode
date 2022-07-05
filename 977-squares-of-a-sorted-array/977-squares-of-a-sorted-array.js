/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let squareArr = Array(nums.length).fill(0);
  let l = 0;
  let r = nums.length - 1;
  let sIdx = nums.length - 1;
  
  while (l <= r) {
    let leftSq = nums[l] * nums[l];
    let rightSq = nums[r] * nums[r];
    if (leftSq > rightSq) {
      squareArr[sIdx] = leftSq;
      l++;
    } else {
      squareArr[sIdx] = rightSq;
      r--;
    }
    sIdx--;
  }
  return squareArr;
};