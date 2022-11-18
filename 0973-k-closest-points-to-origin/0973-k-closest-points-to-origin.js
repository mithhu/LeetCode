/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MaxPriorityQueue({priority: (elem) => elem[0]});
    
    for (let [i, j] of points) {
        let dist = i * i + j * j;
        maxHeap.enqueue([dist, [i, j]]);
        
        if (maxHeap.size() > k){
            maxHeap.dequeue();
        }
    }
    
    let res = [];
    for (let elem of maxHeap.toArray()) {
        res.push(elem.element[1])
    }
    
    return res;
    
};