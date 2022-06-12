/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let count = _.countBy(tasks);
  let maxHeap = new MaxPriorityQueue();
  for (let cnt of Object.values(count)) {
    maxHeap.enqueue(cnt);
  }
  
  let time = 0;
  let q = [];
  
  while (maxHeap.size() || q.length) {
    time++;
    if (maxHeap.size()) {
      let cnt = maxHeap.dequeue().element - 1;
      if (cnt) {
        q.push([cnt, time + n])        
      }
    }
    
    if (q.length && q[0][1] === time) {
      maxHeap.enqueue([q.shift()[0]])
    }
  }
  
  
  
  return time;
    
};