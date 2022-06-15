/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  let stack = [];
  
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    let h = heights[i];
    
    while(stack.length && stack.at(-1)[1] > h) {
      let [idx, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - idx));
      start = idx;
    }
    stack.push([start, h]);
  }
  
  for (let[i, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - i))
  }
  
  return maxArea;
    
};