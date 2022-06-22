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
  
  let cycle = new Set();
  let visit = new Set();
  
  function dfs(course) {
    if (cycle.has(course)) {
      return false;
    }
    if (visit.has(course)) {
      return true;
    }
    cycle.add(course);
    for (let nei of preMap[course]) {
      if (!(dfs(nei))) {
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