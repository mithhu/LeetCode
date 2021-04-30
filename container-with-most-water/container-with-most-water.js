/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;

  while(p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    
    if(heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}