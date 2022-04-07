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
  
  const visited = new Set();
  
  function dfs(course) {
    if (visited.has(course)) return false;
    if (preMap[course] === []) return true;
    
    visited.add(course);
    for (let pre of preMap[course]) {
      if (!dfs(pre)) return false;
    }
    visited.delete(course);
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