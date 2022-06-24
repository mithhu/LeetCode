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
  let goodNodesCount = 0;

  function dfs(node, maxVal) {
    if (node === null) {
      return;
    }
    if (node.val >= maxVal) {
      goodNodesCount++;
    }
    maxVal = Math.max(maxVal, node.val);
    dfs(node.left, maxVal);
    dfs(node.right, maxVal);

  } 
  
  
  dfs(root, -Infinity)

  return goodNodesCount;

    
};
