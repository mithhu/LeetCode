/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.count = 0;
    this.l = 0;
    this.arr = [];
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.count++;
    this.arr.push(val);
    this.sum += val;
    
    if (this.count > this.size) {
        let leftVal = this.arr[this.l];
        this.sum -= leftVal;
        this.l++;
    }
    return this.sum / Math.min(this.count, this.size);
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */