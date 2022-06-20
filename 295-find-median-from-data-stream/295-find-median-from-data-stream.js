
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
      let elem = this.small.dequeue().element;
      this.large.enqueue(elem);
    } else if (this.small.size() < this.large.size()) {
      let elem = this.large.dequeue().element;
      this.small.enqueue(elem);
    }
  }
  
  findMedian() {
    if ((this.small.size() + this.large.size()) % 2) {
      return this.small.front().element;
    }
    
    return (this.small.front().element + this.large.front().element) / 2;
  }
};



