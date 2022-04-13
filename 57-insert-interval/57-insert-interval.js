/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const merged = [];
  let i = 0;
  
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    merged.push(intervals[i]);
    i++;
  }
  
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  
  merged.push(newInterval);
  
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
    
};