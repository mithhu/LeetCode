/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  res.push(intervals[0]);
  
  
  for (let i = 1; i < intervals.length; i++) {
    let [s, e] = intervals[i];
    let lastInterval = res.at(-1);
    
    if (s <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], e);
    } else {
      res.push(intervals[i]);
    }
  }
  return res; 
};