class TrieNode {
  constructor() {
    this.childrens = {};
    this.endOfW = false;    
  }

}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        curr.childrens[ch] = new TrieNode;
      }
      curr = curr.childrens[ch];
    }
    curr.endOfW = true;
  }
  
  search(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        return false;
      }
      curr = curr.childrens[ch];
    }
    return curr.endOfW;
  }
  
  startsWith(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        return false;
      }
      curr = curr.childrens[ch];
    }
    return true;
  }
  
};


