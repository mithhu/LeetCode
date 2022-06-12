/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
  
  addWord(word) {
    let curr = this;
    for (let ch of word) {
      if (!(ch in curr.children)) {
        curr.children[ch] = new TrieNode();
      }
      curr = curr.children[ch];
    }
    curr.word = true;
  }
}

var findWords = function(board, words) {
  let root = new TrieNode();
  for (let word of words) {
    root.addWord(word);
  }
  
  let res = [];
  
  let ROWS = board.length;
  let COLS = board[0].length;
  
  function dfs(r, c, node, word) {
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || !board[r][c] || !(board[r][c] in node.children)) {
      return;
    }
    node = node.children[board[r][c]];
    word += board[r][c];
    
    if (node.word) {
      res.push(word);
      node.word = false;
    }
  
  
    let temp = board[r][c];
    board[r][c] = null;   
    dfs(r + 1, c, node, word);
    dfs(r - 1, c, node, word);
    dfs(r, c + 1, node, word);
    dfs(r, c - 1, node, word);
    board[r][c] = temp;   
  }
  
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      dfs(i, j, root, "");
    }
  }
  
  return res;
  
};