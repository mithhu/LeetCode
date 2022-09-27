/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 1;
  let r = height.length - 2;
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let res = 0;

  while (l <= r) {
    if (leftMax < rightMax) {
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
      l++;
    } else {
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
      r--;
    }
  }
  return res;

}
