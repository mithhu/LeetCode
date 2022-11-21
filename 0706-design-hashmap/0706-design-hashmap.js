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
    this.data = new Array(this.size + 1);
  }
  hash(key) {
    return key % this.size;
  }
  put(key, val) {
    this.remove(key);
    let h = this.hash(key);
    let node = new ListNode(key, val, this.data[h]);
    this.data[h] = node;
  }
  get(key) {
    let h = this.hash(key),
      node = this.data[h];
    while (node) {
      if (node.key === key) return node.val;
      node = node.next;
    }

    return -1;
  }
  remove(key) {
    let h = this.hash(key),
      node = this.data[h];
    if (!node) return;
    if (node.key === key) {
      this.data[h] = node.next;
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
