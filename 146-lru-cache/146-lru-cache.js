/**
 * @param {number} capacity
 */
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
    this.cache = new Map();
  }
  
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }
  
  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  
  get(key) {
    if (!(this.cache.has(key))) {
      return -1;
    }
    this.remove(this.cache.get(key));
    this.insert(this.cache.get(key));
    return this.cache.get(key).val;
  }
  
  put(key, val) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    this.cache.set(key, new Node(key, val));
    this.insert(this.cache.get(key));
    
    if (this.cache.size > this.cap) {
      let lru = this.left.next;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  };
    
};

/** 
 * @param {number} key
 * @return {number}
 */

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */