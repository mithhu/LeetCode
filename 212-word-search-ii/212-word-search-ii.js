class TrieNode {
  constructor() {
    this.childrens = {};
    this.word = false;
  }

  addWord(word) {
    let curr = this;
    for (let ch of word) {
     if (!(ch in curr.childrens)) {
       curr.childrens[ch] = new TrieNode()
     }
     curr = curr.childrens[ch];
    }
    curr.word = true;
  }
}



var findWords = function(board, words) {
  let root = new TrieNode();
  words.forEach((word) => root.addWord(word));

  let R = board.length;
  let C = board[0].length;
  let res = [];
  
  function dfs(r, c, node, currStr) {
    if (r < 0 || c < 0 || c === C || r === R || !board[r][c] || !(board[r][c] in node.childrens)) {
     return false;
   }
   currStr += board[r][c];
   node = node.childrens[board[r][c]];
   if (node.word) {
     res.push(currStr);
     node.word = false;
   }
   let temp = board[r][c];
   board[r][c] = null;

   dfs(r + 1, c, node, currStr);
   dfs(r - 1, c, node, currStr);
   dfs(r, c + 1, node, currStr);
   dfs(r, c - 1, node, currStr);
   board[r][c] = temp;
  }

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      dfs(r, c, root, "");
    }
  }
 

  return res;

  
    
};


