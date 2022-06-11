class TrieNode {
  constructor() {
    this.childrens = {};
    this.endW = false;
  }
}


class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word) {
    let curr = this.root;
    
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        curr.childrens[ch] = new TrieNode();
      }
      curr = curr.childrens[ch];
    }
    curr.endW = true;
  }
  
  search(word) {
    function dfs(idx, node) {
      let curr = node;

      for (let i = idx; i < word.length; i++) {
        let ch = word[i];
        if (ch === ".") {
          for (let child of Object.values(curr.childrens)) {
              if (dfs(i + 1, child)) {
                return true;
              }
          }
          return false;
        } else {
          if (!(ch in curr.childrens)) {
            return false;
          }
          curr = curr.childrens[ch];
        }
      }


      return curr.endW;
    }
    return dfs(0, this.root);
  }
};
