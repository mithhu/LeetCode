
var DetectSquares = function() {
  this.pointCounts = {};
  this.points = [];
    
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
  let p = point[0] + "_" + point[1];
  if (!(p in this.pointCounts)) {
    this.pointCounts[p] = 0;
  }
  this.pointCounts[p]++;
  this.points.push(point);
    
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
  let res = 0;
  let [px, py] = point;
  for (let [x, y] of this.points) {
    if (Math.abs(x - px) !== Math.abs(y - py) || x === px || y === py) {
      continue;
    }
    let p1 = x + "_" + py;
    let p2 = px + "_" + y;    
    res += (this.pointCounts[p1] || 0) * (this.pointCounts[p2] || 0);
  }
  return res;
    
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */