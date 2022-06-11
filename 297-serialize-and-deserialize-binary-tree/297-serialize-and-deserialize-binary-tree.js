/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let res = [];
  function generateTree(node) {
    if (node === null) {
      res.push("N");
      return;
    }
    res.push(node.val);
    generateTree(node.left);
    generateTree(node.right);
  }
  
  generateTree(root);
  return res.join(",");
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(","); //[]
  let i = 0;
  function dfs() {
    if (arr[i] === "N") {
      i++;
      return null;
    }
    let curNode = new TreeNode(arr[i]);
    i++;
    curNode.left = dfs();
    curNode.right = dfs();
    return curNode;
  }
  
  return dfs();
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */