/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.childrens = {};
    this.word = false;
  }
  addWord(word) {
    let curr = this;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        curr.childrens[ch] = new TrieNode();
      }
      curr = curr.childrens[ch];
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
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || !board[r][c] || !(board[r][c] in node.childrens)) {
      return;
    }
    node = node.childrens[board[r][c]];
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
  
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, root, "")
    }
  }
  
  return res;
    
};