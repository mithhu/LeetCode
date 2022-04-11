/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0;
  let res = 0;
  
  function dfs(node) {
    if (node.left) {
      dfs(node.left);
    }
    count++;
    if (count === k) {
      res = node.val;
      return node.val;
    } 
    
    if (node.right) {
      dfs(node.right);
    }
  }
  
  dfs(root);
  return res;
    
};