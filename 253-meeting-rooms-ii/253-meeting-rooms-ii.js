/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  
  let start = intervals.map((el) => el[0]).sort((a, b) => a - b);
  let end = intervals.map((el) => el[1]).sort((a, b) => a - b);
  
  let roomCount = 0;
  let res = -Infinity;
  let sI = 0;
  let eI = 0;

  while (sI < start.length && eI < end.length) {
    if (start[sI] < end[eI]) {
      sI++;
      roomCount++;
      res = Math.max(res, roomCount);
    } else {
      roomCount--;
      eI++;
    }
  }

  return res;
  
    
};
