/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    let prevEnd = res.at(-1);
    let intervalStart = intervals[i][0];

    if (intervalStart <= prevEnd[1]) {
      prevEnd[1] = Math.max(prevEnd[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
    
};
