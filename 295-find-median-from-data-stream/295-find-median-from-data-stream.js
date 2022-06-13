
class MedianFinder {
  constructor() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
  }
  
  
  addNum(num) {
    if (this.small.isEmpty() || this.small.front().element >= num) {
      this.small.enqueue(num);
    } else {
      this.large.enqueue(num);
    }  
    
    if (this.small.size() > this.large.size() + 1) {
      let val = this.small.dequeue().element;
      this.large.enqueue(val);
    } else if (this.small.size() < this.large.size()) {
      let val = this.large.dequeue().element;
      this.small.enqueue(val);
    }
  }
  
  findMedian() {
    //2 bucket equal
    if (this.small.size() === this.large.size()) {
      return (this.small.front().element + this.large.front().element) / 2;
    }
    return this.small.front().element;
  }
    
};
