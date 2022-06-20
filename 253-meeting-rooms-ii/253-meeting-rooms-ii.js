/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let start = intervals.map((el) => el[0]).sort((a, b) => a - b);
  let end = intervals.map((el) => el[1]).sort((a, b) => a - b);
  
  let res = 0;
  let count = 0;
  let sIdx = 0;
  let eIdx = 0;
  
  while (sIdx < start.length) {
    if (start[sIdx] < end[eIdx]) {
      count++;
      sIdx++;
      res = Math.max(res, count);
    } else {
      count--;
      eIdx++;
    }
  }
  
  return res;
};