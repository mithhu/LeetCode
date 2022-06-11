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
 * @return {number}
 */
var goodNodes = function(root) {
  let res = [];
  function dfs(node, maxVal) {
    if (node === null) {
      return 0;
    }
    
    res = 1 ? node.val >= maxVal : 0;
    
    maxVal = Math.max(maxVal, node.val);
    
    res += dfs(node.left, maxVal);
    res += dfs(node.right, maxVal);
    
    return res;
  }
  
  return dfs(root, root.val)
};