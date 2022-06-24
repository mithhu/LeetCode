/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.minHeap = new MinPriorityQueue();
  nums.forEach((num) => this.add(num))
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minHeap.enqueue(val);
  if (this.minHeap.size() > this.k) {
    this.minHeap.dequeue();
  }
  return this.minHeap.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */