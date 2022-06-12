/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let maxHeap = new MaxPriorityQueue();
  
  for (let stone of stones) {
    maxHeap.enqueue(stone);
  }
  
  while (maxHeap.size() > 1) {
    let y = maxHeap.dequeue().element;
    let x = maxHeap.dequeue().element;
    
    if (x !== y) {
      maxHeap.enqueue(y - x);
    }
  }
  
  return maxHeap.size() ? maxHeap.front().element : 0;
    
};