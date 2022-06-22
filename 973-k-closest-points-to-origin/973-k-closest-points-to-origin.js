/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let maxHeap = new MaxPriorityQueue({priority: (elem) => elem[0]});
  
  for (let i = 0; i < k; i++) {
    let [x, y] = points[i];
    let dist = (x * x) + (y * y)
    maxHeap.enqueue([dist, [x, y]]);
  }
  
  for (let i = k; i < points.length; i++) {
    let [x, y] = points[i];
    let dist = (x * x) + (y * y);
    
    if (dist < maxHeap.front().element[0]) {
      maxHeap.dequeue();
      maxHeap.enqueue([dist, [x, y]]);
    }
  }
  
  let res = [];
    
  for (let elem of maxHeap.toArray()) {
    res.push(elem.element[1])
  }
  
  return res;
};