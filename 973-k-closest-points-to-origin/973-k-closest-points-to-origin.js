/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let maxHeap = new MaxPriorityQueue({priority: (elem) => elem[0]});
  let res = [];
  
  for (let i = 0; i < k; i++) {
    let [a, b] = points[i];
    let dist = a*a + b*b;
    maxHeap.enqueue([dist,points[i]]);
  }

  
  for (let i = k; i < points.length; i++) {
    let [a, b] = points[i];
    let dist = a*a + b*b;
    if (maxHeap.front().element[0] > dist) {
      maxHeap.dequeue();
      maxHeap.enqueue([dist,points[i]]);
    }
  }
  
  for (let elem of maxHeap.toArray()) {
    res.push(elem.element[1])
  }
  return res;
    
};