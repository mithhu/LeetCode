/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  let res = 0;
  let prevEnd = intervals[0][1];
  
  for (let [start, end] of intervals.slice(1)) {
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      res++;
      prevEnd = Math.min(prevEnd, end)
    }
  }
  return res;
    
};