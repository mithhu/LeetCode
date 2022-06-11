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
 * @return {boolean}
 */
var isBalanced = function(root) {
  
  function dfs(node) {
    if (node === null) {
      return 0;
    }
    
    let leftH = dfs(node.left);
    let rightH = dfs(node.right);
    
    if (leftH === -1 || rightH === -1) {
      return -1;
    }
    
    if (Math.abs(leftH - rightH) > 1) {
      return -1
    }
    
    return 1 + Math.max(leftH, rightH)
    
    
  }
  
  return dfs(root) === -1 ? false : true;
    
};