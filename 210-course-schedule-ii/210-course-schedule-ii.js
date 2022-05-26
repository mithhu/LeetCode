/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }
  
  for (let course of prerequisites) {
    preMap[course[0]].push(course[1]);
  }
  
  
  let visit = new Set();
  let cycle = new Set();
  let res = [];
  
  function dfs(course) {
    if (cycle.has(course)) return false;
    if (visit.has(course)) return true;
    cycle.add(course);
    
    for (let pre of preMap[course]) {
      if(!dfs(pre)) {
        return false;
      }
    }
    cycle.delete(course);
    visit.add(course);
    res.push(course);
    return true;
  }
  
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }
  return res;
    
};