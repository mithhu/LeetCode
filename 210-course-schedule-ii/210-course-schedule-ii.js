/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = Array(numCourses).fill(0);
  let graph = Array(numCourses).fill().map(() => []);
  
  prerequisites.forEach((edge) => {
    let [child, parent] = edge;
    graph[parent].push(child);
    inDegree[child]++;
  })
  
  let sources = [];
  let res = [];
  
  
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }
  
  while (sources.length) {
    let vertex = sources.pop();
    res.push(vertex);
    graph[vertex].forEach((edge) => {
      inDegree[edge]--;
      if (inDegree[edge] === 0) {
        sources.push(edge)
      }
    })
  }
  
  if (res.length === numCourses) {
    return res;
  }
  
  return [];
  
  
    
};