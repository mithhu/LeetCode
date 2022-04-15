/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let start = intervals.map((inter) => inter[0]).sort((a, b) => a - b);
  let end = intervals.map((inter) => inter[1]).sort((a, b) => a - b);
  
  let s = 0;
  let e = 0;
  let res = 0;
  let count = 0;
  
  while (s < start.length) {
    if (start[s] < end[e]) {
      count++;
      s++;
      res = Math.max(res, count);
    } else {
      count--;
      e++;
    }
  }
  
  return res;
  
    
};