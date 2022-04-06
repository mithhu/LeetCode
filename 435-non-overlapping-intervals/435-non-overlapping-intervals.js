/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  let res = 0;
  let prevEnd = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      prevEnd = Math.min(prevEnd, end);
      res++;
    }
    
  }
    
  return res;
};