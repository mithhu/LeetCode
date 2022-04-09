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
var maxPathSum = function(root) {
  let maxSum = -Infinity;
  
  function getMaxPathSum(node) {
    if (node === null) return 0;
    
    let leftSum = Math.max(getMaxPathSum(node.left), 0);
    let rightSum = Math.max(getMaxPathSum(node.right), 0);
    
    let currentSum = leftSum + rightSum + node.val;
    
    maxSum = Math.max(currentSum, maxSum);
    return node.val + Math.max(leftSum, rightSum)
  }
  
  getMaxPathSum(root);
  
  return maxSum;
    
};