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
var diameterOfBinaryTree = function(root) {
  let treeDiameter = 0;
  
  function dfs(node) {
    //base
    if (node === null) {
      return 0;
    }
    
    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);
    let diameter = leftHeight + rightHeight;
    treeDiameter = Math.max(diameter, treeDiameter);
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
  dfs(root);
  
  return treeDiameter;
    
};