
var TimeMap = function() {
    this.store = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!(key in this.store)) {
    this.store[key] = [];
  }
  this.store[key].push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let res = "";
  let values = key in this.store ? this.store[key] : []; //[bar, 1]
  
  let l = 0;
  let r = values.length - 1;
  
  while ( l <= r) {
    let mid = l + (Math.floor((r - l) / 2));
    if (values[mid][1] === timestamp) {
      return values[mid][0];
    } else if (values[mid][1] < timestamp) {
      res = values[mid][0];
      l = mid + 1;
    } else {
      r = mid - 1;
    }
    
  }
  
  return res;
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */