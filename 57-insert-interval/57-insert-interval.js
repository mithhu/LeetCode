/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = [];
  
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i]
    
    //newinterval should go before and eturn
    if (newInterval[1] < interval[0]) {
      res.push(newInterval, ...intervals.slice(i));
      return res;;
    } else if (newInterval[0] > interval[1]) {
    //interval should go before
     res.push(interval); 
    } else {
     //merge interval
      // newInterval[1] >= interval[0] && newInterval[0] <= interval[1]
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])]
    }
  }
  
  res.push(newInterval);
  
  
  return res;
    
};