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
  for (let [c, p] of prerequisites) {
    preMap[c].push(p);
  }
  
  let visit = new Set();
  let cycle = new Set();
  
  function dfs(course) {
    if (cycle.has(course)) {
      return false;
    }
    if (visit.has(course)) {
      return true;
    }
    cycle.add(course);
    
    for (let pre of preMap[course]) {
      if (!dfs(pre)) {
        return false;
      }
    }
    cycle.delete(course);
    visit.add(course);
    
    return true;
  }
  
  
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;  
};


