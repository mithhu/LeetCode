/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  
  let i = 0;
  let minHeap = new MinPriorityQueue({priority: (el) => el[0]});
  let res = {};
  
  for (let q of [...queries].sort((a, b) => a -b)) {
    while (i < intervals.length && intervals[i][0] <= q) {
      let [l, r] = intervals[i];
      minHeap.enqueue([r - l + 1, r]);
      i++;
    }
    
    while (minHeap.size() && minHeap.front().element[1] < q) {
      minHeap.dequeue();
    }
    
    res[q] = minHeap.size() ? minHeap.front().element[0] : - 1;
  }
  
  
  let result = [];
  for (let q of queries) {
    result.push(res[q]);
  }
  
  return result;
    
};