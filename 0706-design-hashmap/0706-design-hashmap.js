class ListNode {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.size = 769;
    this.map = new Array(this.size + 1);
  }

  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    this.remove(key);
    let idx = this.hash(key);
    let node = new ListNode(key, value, this.map[idx]);
    this.map[idx] = node;
  }

  get(key) {
    let idx = this.hash(key);
    let node = this.map[idx];
    while (node) {
      if (node.key === key) {
        return node.val;
      }
      node = node.next;
    }
    return -1;
  }

  remove(key) {
    let idx = this.hash(key);
    let node = this.map[idx];
    if (!node) return;
    if (node.key === key) {
      //1st
      this.map[idx] = node.next;
      return;
    }

    while (node.next) {
      if (node.next.key === key) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }
}
