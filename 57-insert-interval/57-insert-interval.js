/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = [];
  
  for (let i = 0; i < intervals.length; i++) {
    //newInterval finishes early
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval, ...intervals.slice(i));
      return res;
    } else if (intervals[i][1] < newInterval[0]) {
      //main interval finishes early
      res.push(intervals[i]);
    } else {
      //overlap
      newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1],newInterval[1])];
    }
  }
  res.push(newInterval);
  return res;
};