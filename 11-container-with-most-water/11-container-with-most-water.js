/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  
  let l = 0;
  let r = height.length - 1;
  
  while (l < r) {
    let h = Math.min(height[l], height[r]);
    let w = r - l; 
    maxArea = Math.max(maxArea, h * w);
    
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  
  return maxArea;
    
};