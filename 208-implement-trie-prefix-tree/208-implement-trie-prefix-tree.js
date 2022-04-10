


/** 
 * @param {string} word
 * @return {void}
 */

class TrieNode {
  constructor() {
    this.children = {};
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
      if (!(ch in  curr.children)) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }
    curr.endOfW = true; 
  }
  
  search(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in  curr.children)) {
        return false;
      }
      curr = curr.children[ch];
    }
    return curr.endOfW;   
  }
  
  startsWith(prefix) {
    let curr = this.root;
    for (let ch of prefix) {
      if (!(ch in  curr.children)) {
        return false;
      }
      curr = curr.children[ch];
    }
    return true;
  }
  
}





/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */