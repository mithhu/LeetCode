/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let maxHeap = new MaxPriorityQueue({priority: (elem) => elem[0]});
    
    for (let [r, c] of points) {
        let d = (r * r) + (c * c);
        if (maxHeap.size() < k) {
            maxHeap.enqueue([d, r, c ])
        } else {
            if (maxHeap.front().priority > d) {
                maxHeap.dequeue();
                maxHeap.enqueue([d, r, c])
            }
        }
    }

    let res = [];
    for (let {element: [d, r, c]} of maxHeap.toArray()) {
        res.push([r, c])
    }
    
    console.log(res);
    return res;
};