/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest{
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();
    
    for (let num of nums) {
      this.add(num);
    }
  }
  
  
  add(val) {
    this.minHeap.enqueue(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }
    
    return this.minHeap.front().element;
    
  }
};

/** 
 * @param {number} val
 * @return {number}
 */


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */