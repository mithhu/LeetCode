
class TimeMap {
  constructor() {
    this.store = {};
  }
  
  set(key, value, timestamp) {
    if (!(key in this.store)) {
      this.store[key] = [];
    }
    this.store[key].push([value, timestamp]);
  }
  
  get(key, timestamp) {
    let res = "";
    let values = key in this.store ? this.store[key] : [];
    
    let l = 0;
    let r = values.length - 1;
    
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2);
      if (values[mid][1] === timestamp) {
        return values[mid][0];
      } else if (values[mid][1] < timestamp) {
        res = values[mid][0];
        l = mid + 1;
      } else {
        r = mid - 1
      }
    }
    return res;
    
  };
  
    
};

