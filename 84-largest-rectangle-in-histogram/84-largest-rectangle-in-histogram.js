/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = []; //[idx, h]
  let maxArea = 0;
  
  for (let i = 0; i < heights.length; i++) {
    let start = i;
    let height = heights[i];
    
    while (stack.length && stack.at(-1)[1] > height) {
      let [idx, curH] = stack.pop();
      maxArea = Math.max(maxArea, curH * (i - idx));
      start = idx;
    }
    stack.push([start, height]);
  }

  for (let [i, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - i));
  }
  return maxArea;
};