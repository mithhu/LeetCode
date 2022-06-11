class TrieNode {
  constructor() {
    this.childrens = {}; //{a: {p : {p: {}, e: {}}}}
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
        curr.childrens[ch] = new TrieNode();
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

  startsWith(prefix) {
    let curr = this.root;
    
    for (let ch of prefix) {
      if (!(ch in curr.childrens)) {
        return false;
      }
      curr = curr.childrens[ch];
    }
    return true;
  }
  
}



/** 
 * @param {string} word
 * @return {boolean}
 */

/** 
 * @param {string} prefix
 * @return {boolean}
 */


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */