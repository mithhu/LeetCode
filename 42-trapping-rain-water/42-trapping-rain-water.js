/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height.at(-1);
  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      res += leftMax - height[l] > 0 ? leftMax - height[l] : 0;
      leftMax = Math.max(leftMax, height[l]);
    } else {
      r--;
      res += rightMax - height[r] > 0 ? rightMax - height[r] : 0;
      rightMax = Math.max(rightMax, height[r]);
    }
  }
  return res;

}
