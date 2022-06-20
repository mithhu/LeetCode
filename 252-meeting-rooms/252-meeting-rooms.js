/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++ ) {
    let prevEnd = intervals[i - 1][1];
    let [s, e] = intervals[i];
    if (s < prevEnd) {
      return false;
    }
  }
  
  return true;
    
};