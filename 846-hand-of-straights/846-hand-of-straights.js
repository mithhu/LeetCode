/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  let count = _.countBy(hand);
  
  let minHeap = new MinPriorityQueue();
  Object.keys(count).forEach((el) => minHeap.enqueue(el));
  
  while (minHeap.size()) {
    let first = minHeap.front().priority;
    for (let i = first; i < first + groupSize; i++) {
      if (!(i in count)) {
        return false;
      }
      count[i] -= 1;
      if (count[i] === 0) {
        if (i !== minHeap.front().priority) {
          return false;
        } else {
          minHeap.dequeue();
        }
      }
    }
  }
  return true;
    
};