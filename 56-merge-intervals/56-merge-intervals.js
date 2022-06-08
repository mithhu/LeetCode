/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  let res = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let lastEnd = res.at(-1);
    let [start, end] = intervals[i];
    
    if (start <= lastEnd[1]) {
      lastEnd[1] = Math.max(lastEnd[1], end);
    } else {
      res.push(intervals[i])
    }

  }
  
  return res;
};