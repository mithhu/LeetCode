/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }
  
  for (let course of prerequisites) {
    preMap[course[0]].push(course[1]);
  }
  
  let visit = new Set();
  
  function dfs(course) {
    if (visit.has(course)) return false;
    if (preMap[course].length === 0) return true;
    
    visit.add(course);
    for (let pre of preMap[course]) {
      if(!dfs(pre)) {
        return false;
      }
    }
    visit.delete(course);
    preMap[course] = [];
    return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;
    
};