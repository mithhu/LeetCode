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
  let q = new Queue();
  
  while (maxHeap.size() || q.size()) {
    time++;
    if (maxHeap.size()) {
      let cnt = maxHeap.dequeue().element - 1;
      if (cnt) {
        q.enqueue([cnt, time + n])        
      }
    }
    
    if (q.size() && q.front()[1] === time) {
      maxHeap.enqueue([q.dequeue()[0]])
    }
  }
  
  
  
  return time;
    
};