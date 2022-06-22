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
  // cap, left, r, cache
  constructor(cap) {
    this.cap = cap;
    this.cache = new Map();
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
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
    };
    this.remove(this.cache.get(key));
    this.insert(this.cache.get(key));
    return this.cache.get(key).val;
  }
  
  put(key, val) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    };
    this.cache.set(key, new Node(key, val));
    this.insert(this.cache.get(key));
    
    if (this.cache.size > this.cap) {
      let lru = this.left.next;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
    
  }
}

