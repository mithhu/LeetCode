/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  for (let i = 1; i < intervals.length; i++) {
    let s = intervals[i][0];
    let e = intervals[i - 1][1];
    
    if (e > s) return false;   
  }  
  return true;  
};