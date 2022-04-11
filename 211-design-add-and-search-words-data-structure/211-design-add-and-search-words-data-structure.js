class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode(); // {b: {a: }, end : false}, end: false
  }
  
  addWord(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.children)) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }
    curr.end = true;
  }
  
  search(word) {
    function dfs(j, root) {
      let curr = root;
      for (let i = j; i < word.length; i++) {
          let ch = word[i];
          if (ch === ".") {
            for (let child of Object.values(curr.children)) {
              if (dfs(i + 1, child)) {
                return true;
              }
            }
            return false;

          } else {
            if (!(ch in curr.children)) {
              return false;
            } else {
              curr = curr.children[ch];
            }
          }  
        }
      return curr.end;
    }
    return dfs(0, this.root);
  }
}
