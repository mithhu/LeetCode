
class TrieNode {
  constructor() {
    this.childrens = {};
    this.endw = false;
  }

  addWord(word) {
    let curr = this;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        curr.childrens[ch] = new TrieNode();
      }
      curr = curr.childrens[ch];
    }
    curr.endw = true;
  }
}


var findWords = function(board, words) {
  let root = new TrieNode();
  for (let word of words) {
    root.addWord(word);
  }

  let R = board.length;
  let C = board[0].length;
  let res = [];

  function wordFindHelper(r, c, node, currStr) {
    if (r < 0 || c < 0 || r === R || c === C || !board[r][c] || !(board[r][c] in node.childrens)) {
      return false;
    }
    currStr += board[r][c];
    node = node.childrens[board[r][c]];
    if (node.endw) {
      res.push(currStr);
      node.endw = false;
    }
    let temp = board[r][c];
    board[r][c] = null;
    wordFindHelper(r + 1, c, node, currStr);
    wordFindHelper(r - 1, c, node, currStr);
    wordFindHelper(r, c + 1, node, currStr);
    wordFindHelper(r, c - 1, node, currStr);
    board[r][c] = temp; 
  }

  

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      wordFindHelper(r, c, root,  "");
    }
  }

  return res;
  


}
