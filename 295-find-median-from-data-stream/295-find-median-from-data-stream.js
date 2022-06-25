class MedianFinder {
  constructor() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
  }

  addNum(num) {
    if (this.small.size() === 0 || this.small.front().element >= num) {
      this.small.enqueue(num);
    }  else {
      this.large.enqueue(num);
    }

    //make it valid
    if (this.small.size() - this.large.size() > 1) {
      this.large.enqueue(this.small.dequeue().element);
    } else if (this.large.size() > this.small.size()) {
      this.small.enqueue(this.large.dequeue().element);
    }
  }

  findMedian() {
     if ((this.small.size() + this.large.size()) % 2) {
       return this.small.front().element;
     }

     return (this.small.front().element + this.large.front().element) / 2;
  }
};

