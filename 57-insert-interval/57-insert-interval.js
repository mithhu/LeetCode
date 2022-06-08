/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = [];
  
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (newInterval[1] < interval[0]) {
      res.push(newInterval, ...intervals.slice(i));
      return res;
    } else if (newInterval[0] > interval[1]) {
      res.push(interval);
    } else {
      newInterval = [Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1])];
    }
  }
  res.push(newInterval);
  return res;
    
};