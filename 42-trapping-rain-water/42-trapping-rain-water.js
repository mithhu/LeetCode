/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;
  let lMax = height[l];
  let rMax = height[r];
  
  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, height[l]);
      res += lMax - height[l]; 
    } else {
      r--;
      rMax = Math.max(rMax, height[r]);
      res += rMax - height[r]; 
    }
  }
  
  
  return res;
};