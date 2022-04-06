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
var isValidBST = function(root) {
  return validateBstHelper(root, -Infinity, Infinity);

};

function validateBstHelper(node, minVal, maxVal) {
  if (node === null) return true;
  
  if (node.val <= minVal || node.val >= maxVal) return false;
  
  return validateBstHelper(node.left, minVal, node.val) && validateBstHelper(node.right, node.val, maxVal)
    
}