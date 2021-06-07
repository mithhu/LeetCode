/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  
  for(let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }
  
  const stack = [];
  
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }
  
  let count = 0;
  
  while(stack.length) {
    const current = stack.pop();
    count++;
    
    for(let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if(pair[1] === current) {
        inDegree[pair[0]]--;
        if(inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }
  
  return count === n;
};
