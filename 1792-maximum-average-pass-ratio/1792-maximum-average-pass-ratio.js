/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
  const q = new MaxPriorityQueue({
    priority: i => (classes[i][0] + 1) / (classes[i][1] + 1) - 
      classes[i][0] / classes[i][1],
  });
  classes.forEach((_, i) => {
    q.enqueue(i);
  });
  
  let es = extraStudents;
  while (es) {
    const i = q.dequeue().element;
    
    classes[i][0] += 1;
    classes[i][1] += 1;
    q.enqueue(i);
    
    es -= 1;
  }
  
  let sum = 0;
  classes.forEach(([p, t]) => {
    sum += p / t;
  });
  
  return sum / classes.length;
};
